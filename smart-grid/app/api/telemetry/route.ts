import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Log incoming ESP32 telemetry packet
    console.log(" Received Telemetry Packet from Node:", payload.meterId || payload.id);
    console.log("Payload Data:", JSON.stringify(payload, null, 2));

    // Basic Validation
    if (!payload.meterId && !payload.id) {
      return NextResponse.json(
        { status: "ERROR", message: "Missing meterId identification in telemetry payload" },
        { status: 400 }
      );
    }

    // Here we can process theft alerts or return downlink relay control instructions
    return NextResponse.json({
      status: "SUCCESS",
      timestamp: new Date().toISOString(),
      ack: true,
      downlinkCommand: {
        relayState: "CLOSED", // Or "OPEN" if remote lockout active
        updateIntervalSeconds: 5,
      },
    });
  } catch (error) {
    console.error("Failed to parse ESP32 telemetry payload:", error);
    return NextResponse.json(
      { status: "ERROR", message: "Invalid JSON format" },
      { status: 400 }
    );
  }
}