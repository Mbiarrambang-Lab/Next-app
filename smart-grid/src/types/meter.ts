export type RelayState = "CLOSED" | "OPEN_TAMPER_LOCKOUT" | "OPEN_REMOTE_DISCONNECT";

export type TamperFlag = 
  | "NONE"
  | "PHASE_SHUNT_MISMATCH"
  | "LID_ENCLOSURE_BREACH"
  | "PHYSICAL_IMPACT"
  | "REVERSE_CURRENT";

export interface ElectricalReadings {
  voltageRMS: number;          // Volts (ZMPT101B)
  phaseCurrent: number;        // Amperes (PZEM-004T - Phase)
  neutralCurrent: number;      // Amperes (PZEM-004T - Neutral)
  activePower: number;         // Watts
  powerFactor: number;         // 0.00 - 1.00
  frequency: number;           // Hz (Standard: 50.0Hz)
}

export interface TamperSensors {
  chassisSwitchClosed: boolean;
  terminalCoverClosed: boolean;
  accelerometerGForce: number; // MPU6050 spatial vector
  currentDeltaAmps: number;    // |I_phase - I_neutral|
}

export interface SmartMeterNode {
  id: string;                  // e.g., "METER_110"
  customerName: string;
  location: string;            // e.g., "Molyko Rd, Sector 4"
  rssiSignal: number;          // dBm (-120 to -30)
  lastSeenTimestamp: string;
  relayState: RelayState;
  tamperFlag: TamperFlag;
  readings: ElectricalReadings;
  tamperSensors: TamperSensors;
}

export interface DifferentialCurrentAudit {
  transformerTotalSupplyAmps: number;
  aggregateMetersDrawAmps: number;
  unaccountedLeakageAmps: number;
  leakagePercentage: number;
  isTheftAlertActive: boolean;
}