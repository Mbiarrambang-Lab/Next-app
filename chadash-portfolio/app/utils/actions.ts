'use server';

import { Resend } from 'resend';

// Initialize Resend with your environment variable API key
const resend = new Resend(process.env.RESEND_API_KEY);

export interface FormState {
    success: boolean;
    message: string;
}

// Simple email validation regex for basic server-side structural security
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function transmitPacket(prevState: any, formData: FormData): Promise<FormState> {
    // 1. Sanitize and trim incoming strings to prevent basic injection attacks
    const identity = (formData.get('identity') as string || '').trim();
    const routing = (formData.get('routing') as string || '').trim();
    const payload = (formData.get('payload') as string || '').trim();

    // 2. Strict Input Validation (Security Guard)
    if (!identity || !routing || !payload) {
        return {
            success: false,
            message: "TRANSMISSION_ERROR: Missing required fields (Identity, Email, or Message)."
        };
    }

    if (!EMAIL_REGEX.test(routing)) {
        return {
            success: false,
            message: "TRANSMISSION_ERROR: Invalid return email routing path formatting."
        };
    }

    // 3. Length Constraints (Prevents buffer/payload spamming)
    if (identity.length > 100 || routing.length > 100 || payload.length > 5000) {
        return {
            success: false,
            message: "TRANSMISSION_ERROR: Data package size limits exceeded."
        };
    }

    try {
        // 4. Secure Email Dispatch via Resend Configuration
        const { data, error } = await resend.emails.send({
            // Must be your verified domain or onboarding@resend.dev
            from: 'Chadash Automation <onboarding@resend.dev>', 
            to: ['mbiarrambangmbijunior@gmail.com'], 
            subject: `🚀 New Architecture Inquiry from ${identity}`,
            // SECURITY REQUIREMENT: Maps visitor address safely so you can hit "Reply" directly
            replyTo: routing, 
            // Escape values inside HTML block to prevent basic HTML/Script injection
            html: `
                <div style="font-family: monospace; background-color: #0d1117; color: #f0f6fc; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #d97706; border-bottom: 1px solid #30363d; padding-bottom: 10px;">CHADASH_SECURE_MAIL_BUS // INBOUND</h2>
                    <p><strong>Identity Source:</strong> ${encodeURIComponent(identity)}</p>
                    <p><strong>Return Routing (Email):</strong> ${encodeURIComponent(routing)}</p>
                    <div style="background-color: #161b22; border: 1px solid #30363d; padding: 15px; margin-top: 15px; border-radius: 6px;">
                        <p style="color: #10b981; margin-top: 0;"><strong>System Architecture Payload:</strong></p>
                        <p style="white-space: pre-wrap; color: #c9d1d9;">${encodeURIComponent(payload)}</p>
                    </div>
                    <p style="font-size: 10px; color: #8b949e; margin-top: 20px;">Chadash Automation Secure Transmission Gateway © ${new Date().getFullYear()}</p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend delivery system rejection:", error);
            return {
                success: false,
                message: "TRANSMISSION_ERROR: Mail platform rejected delivery route."
            };
        }

        return {
            success: true,
            message: `PACKET_SUCCESS: Message transmitted to Chadash command center successfully!`
        };

    } catch (error) {
        console.error("Critical server dispatch exception:", error);
        return {
            success: false,
            message: "TRANSMISSION_ERROR: Failed to route packet through network gateway."
        };
    }
}
