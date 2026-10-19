'use server'

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
            message: "TRANSMISSION_ERROR: Empty packet data paths detected. Refusing packet."
        };
    }

    // Engineering Log Output to your local vscode terminal
    console.log("=========================================");
  console.log(`📡 INBOUND BUS PACKET DETECTED:`);
  console.log(`• Identity Source : ${identity}`);
  console.log(`• Return Routing  : ${routing}`);
  console.log(`• Payload Size    : ${payload.length} chars`);
  console.log(`• Message Content : "${payload}"`);
  console.log("=========================================");

  // Simulate a network transmission latency for buffer
  await new Promise(resolve => setTimeout(resolve, 800));

  return {
    success: true,
    message: `PACKET_SUCCESS: Message bus confirmed. Receipt signature generated.`
  };
}