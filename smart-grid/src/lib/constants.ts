import { SmartMeterNode, DifferentialCurrentAudit } from "@/src/types/meter";

export interface ZoneConfig {
  id: string;
  name: string;
  totalNodes: number;
  activeNodes: number;
  currentTariffCFA: number;
  transformerCapacityAmps: number;
  audit: DifferentialCurrentAudit;
  meters: SmartMeterNode[];
}

export const LOCATION_PRESETS: Record<string, ZoneConfig> = {
  buea_molyko: {
    id: "buea_molyko",
    name: "Buea - Molyko Zone 1",
    totalNodes: 500,
    activeNodes: 498,
    currentTariffCFA: 75,
    transformerCapacityAmps: 200,
    audit: {
      transformerTotalSupplyAmps: 150.0,
      aggregateMetersDrawAmps: 102.0,
      unaccountedLeakageAmps: 48.0,
      leakagePercentage: 32.0,
      isTheftAlertActive: true,
    },
    meters: [
      {
        id: "BUEA_M110",
        customerName: "Molyko Commercial Hub",
        location: "Molyko Road, Zone 1",
        rssiSignal: -68,
        lastSeenTimestamp: "2026-10-04 00:32:05",
        relayState: "OPEN_TAMPER_LOCKOUT",
        tamperFlag: "PHASE_SHUNT_MISMATCH",
        readings: {
          voltageRMS: 218.4,
          phaseCurrent: 24.2,
          neutralCurrent: 6.1,
          activePower: 5285,
          powerFactor: 0.96,
          frequency: 50.02,
        },
        tamperSensors: {
          chassisSwitchClosed: true,
          terminalCoverClosed: true,
          accelerometerGForce: 0.02,
          currentDeltaAmps: 18.1,
        },
      },
      {
        id: "BUEA_M072",
        customerName: "UB Junction Apartments",
        location: "UB Junction, Zone 1",
        rssiSignal: -82,
        lastSeenTimestamp: "2026-10-04 00:31:50",
        relayState: "CLOSED",
        tamperFlag: "LID_ENCLOSURE_BREACH",
        readings: {
          voltageRMS: 212.1,
          phaseCurrent: 12.5,
          neutralCurrent: 12.4,
          activePower: 2630,
          powerFactor: 0.98,
          frequency: 49.98,
        },
        tamperSensors: {
          chassisSwitchClosed: true,
          terminalCoverClosed: false,
          accelerometerGForce: 0.05,
          currentDeltaAmps: 0.1,
        },
      },
    ],
  },
  kumba_central: {
    id: "kumba_central",
    name: "Kumba - Commercial Avenue / Fiango",
    totalNodes: 350,
    activeNodes: 342,
    currentTariffCFA: 75,
    transformerCapacityAmps: 180,
    audit: {
      transformerTotalSupplyAmps: 130.0,
      aggregateMetersDrawAmps: 85.0,
      unaccountedLeakageAmps: 45.0,
      leakagePercentage: 34.6,
      isTheftAlertActive: true,
    },
    meters: [
      {
        id: "KMB_M012",
        customerName: "Fiango Main Market Block B",
        location: "Fiango Road, Kumba",
        rssiSignal: -71,
        lastSeenTimestamp: "2026-10-04 00:30:10",
        relayState: "OPEN_TAMPER_LOCKOUT",
        tamperFlag: "PHASE_SHUNT_MISMATCH",
        readings: {
          voltageRMS: 205.2,
          phaseCurrent: 31.0,
          neutralCurrent: 8.5,
          activePower: 6360,
          powerFactor: 0.92,
          frequency: 49.91,
        },
        tamperSensors: {
          chassisSwitchClosed: true,
          terminalCoverClosed: true,
          accelerometerGForce: 0.01,
          currentDeltaAmps: 22.5,
        },
      },
      {
        id: "KMB_M044",
        customerName: "Commercial Ave Plaza",
        location: "Commercial Avenue, Kumba",
        rssiSignal: -60,
        lastSeenTimestamp: "2026-10-04 00:31:00",
        relayState: "CLOSED",
        tamperFlag: "NONE",
        readings: {
          voltageRMS: 219.0,
          phaseCurrent: 14.2,
          neutralCurrent: 14.2,
          activePower: 3100,
          powerFactor: 0.99,
          frequency: 50.01,
        },
        tamperSensors: {
          chassisSwitchClosed: true,
          terminalCoverClosed: true,
          accelerometerGForce: 0.0,
          currentDeltaAmps: 0.0,
        },
      },
    ],
  },
  douala_akwa: {
    id: "douala_akwa",
    name: "Douala - Akwa Commercial District",
    totalNodes: 1200,
    activeNodes: 1195,
    currentTariffCFA: 100,
    transformerCapacityAmps: 400,
    audit: {
      transformerTotalSupplyAmps: 310.0,
      aggregateMetersDrawAmps: 295.0,
      unaccountedLeakageAmps: 15.0,
      leakagePercentage: 4.8,
      isTheftAlertActive: false,
    },
    meters: [
      {
        id: "DLA_M501",
        customerName: "Akwa Business Tower",
        location: "Boulevard de la Liberté, Douala",
        rssiSignal: -52,
        lastSeenTimestamp: "2026-10-04 00:32:00",
        relayState: "CLOSED",
        tamperFlag: "NONE",
        readings: {
          voltageRMS: 223.5,
          phaseCurrent: 45.0,
          neutralCurrent: 45.0,
          activePower: 10050,
          powerFactor: 0.99,
          frequency: 50.00,
        },
        tamperSensors: {
          chassisSwitchClosed: true,
          terminalCoverClosed: true,
          accelerometerGForce: 0.01,
          currentDeltaAmps: 0.0,
        },
      },
    ],
  },
};