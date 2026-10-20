'use server';

import { Resend } from 'resend';

// Initialize Resend with your environment variable API key
const resend = new Resend(process.env.RESEND_API_KEY);

export interface FormState {
    success: boolean;
    message: string;
}

export async function transmitPacket(prevState: any, formData: FormData): Promise<FormState> {
    const identity = formData.get('identity') as string;
    const routing = formData.get('routing') as string;
    const payload = formData.get('payload') as string;

    // Validate packet data paths
    if (!identity || !routing || !payload) {
        return {
            success: false,
            message: "TRANSMISSION_ERROR: Missing required packet fields (Identity, Routing, or Payload)."
        };
    }

    try {
        // Send the email using Resend
        const data = await resend.emails.send({
            from: 'Chadash Automation <onboarding@resend.dev>', // Use onboarding@resend.dev for testing, or your custom domain later
            to: ['mbiarrambang@gmail.com'], // <-- CHANGE THIS to your personal/business email where you want to receive inquiries
            subject: `🚀 New Architecture Inquiry from ${identity}`,
            replyTo: routing, // Allows you to hit "Reply" in your inbox and email the sender directly
            html: `
                <div style="font-family: monospace; background-color: #0d1117; color: #f0f6fc; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #d97706; border-bottom: 1px solid #30363d; padding-bottom: 10px;">CHADASH_SECURE_MAIL_BUS // INBOUND</h2>
                    <p><strong>Identity Source:</strong> ${identity}</p>
                    <p><strong>Return Routing (Email):</strong> ${routing}</p>
                    <div style="background-color: #161b22; border: 1px solid #30363d; padding: 15px; margin-top: 15px; border-radius: 6px;">
                        <p style="color: #10b981; margin-top: 0;"><strong>System Architecture Payload:</strong></p>
                        <p style="white-space: pre-wrap; color: #c9d1d9;">${payload}</p>
                    </div>
                    <p style="font-size: 10px; color: #8b949e; margin-top: 20px;">Chadash Automation Secure Transmission Gateway © ${new Date().getFullYear()}</p>
                </div>
            `,
        });

        console.log("Email transmission response:", data);

        return {
            success: true,
            message: `PACKET_SUCCESS: Message transmitted to Chadash command center successfully!`
        };

    } catch (error) {
        console.error("Email dispatch error:", error);
        return {
            success: false,
            message: "TRANSMISSION_ERROR: Failed to route packet through mail server."
        };
    }
}