export interface SubSection {
  id: string;
  title: string;
  summary: string;
  codeSnippet?: string;
}

export interface DocItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Published' | 'Draft' | 'Updated';
  overview: string;
  protocolFocus: string;
  hardwareBOM: string[];
  youtubeEmbedId?: string;
  subsections: SubSection[];
  sections: { title: string; content: string; codeSnippet?: string }[];
}

export const curriculumDocs: DocItem[] = [
  {
    slug: 'getting-started-company-mission',
    title: '1. Getting Started & Company Mission',
    category: 'Pillar 1: Company & Intro',
    readTime: '8 min read',
    lastUpdated: 'Jan 25, 2026',
    level: 'Beginner',
    status: 'Published',
    overview: 'Lowering capital expenditure barriers in African industrial automation through open-source alternatives and localized hardware manufacturing in Buea, Cameroon.',
    protocolFocus: 'Open-Source Hardware Philosophy vs. Proprietary Commercial Lock-in.',
    hardwareBOM: ['Chadash PLC-X1 Controller', 'Open-Source Toolchain', 'Documentation Guides'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'About Chadash Automation', summary: 'Our mission to bridge the automation gap by providing accessible hardware and structured training.' },
      { id: 'sub-2', title: 'Open-Source vs. Commercial Convenience', summary: 'Comparing high-cost proprietary PLCs to transparent, locally serviceable open-source blueprints.' }
    ],
    sections: [
      {
        title: '1. The High Cost of Industrial Automation',
        content: 'Traditional industrial control systems carry prohibitive import tariffs and licensing fees. Chadash Automation provides open-source blueprints alongside fully assembled, plug-and-play hardware.'
      }
    ]
  },
  {
    slug: 'services-engineering-solutions',
    title: '2. Services & Engineering Solutions',
    category: 'Pillar 2: Services Directory',
    readTime: '12 min read',
    lastUpdated: 'Jan 24, 2026',
    level: 'Intermediate',
    status: 'Published',
    overview: 'Comprehensive commercial offerings by Chadash Automation across industrial contracting, residential wiring, smart retrofitting, and custom hardware manufacturing.',
    protocolFocus: 'Industrial Contracting & BEMS Integration Standards.',
    hardwareBOM: ['Industrial Switchboards', 'Smart Energy Monitors', 'Custom Enclosures'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'Industrial Automation Contracting', summary: 'End-to-end plant automation, sensor integration, and SCADA deployment.' },
      { id: 'sub-2', title: 'Smart Retrofitting & Custom Hardware', summary: 'Upgrading legacy machinery with modern IoT telemetry and custom PCB controllers.' }
    ],
    sections: [
      {
        title: '1. Commercial Service Offerings',
        content: 'We offer professional engineering services tailored for agricultural stations, manufacturing plants, and smart energy grids across Cameroon.'
      }
    ]
  },
  {
    slug: 'hardware-documentation-dmo8-24v',
    title: '3. Hardware Documentation (Chadash-DMO8-24V)',
    category: 'Pillar 3: Hardware Specs',
    readTime: '15 min read',
    lastUpdated: 'Jan 23, 2026',
    level: 'Advanced',
    status: 'Published',
    overview: 'Technical specifications, pinouts, 8-channel MOSFET sinking topology, electrical ratings, and optical isolation barriers (IEC 61131-2 compliance).',
    protocolFocus: 'Galvanic Isolation, LM2596 Power Regulation, and Flyback Diode Suppression.',
    hardwareBOM: ['Chadash-DMO8-24V Board', 'LM2596 Buck Converter', 'PC817 Optocouplers', '1N4007 Diodes'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: '8-Channel MOSFET Sinking Topology', summary: 'Detailed pinouts and electrical ratings for driving inductive loads safely.' },
      { id: 'sub-2', title: 'Galvanic & Optical Isolation (IEC 61131-2)', summary: 'Why PC817 optocouplers protect microcontrollers from 5,000V voltage spikes and ground loops.' }
    ],
    sections: [
      {
        title: '1. Power Management & Fusing',
        content: 'Stepping down 24V industrial field power using LM2596 buck converters while protecting against power grid instability with onboard input fuses.'
      },
      {
        title: '2. Inductive Load Protection',
        content: 'Using 1N4007 flyback diodes across relay coils and MOSFET drains to suppress back-EMF spikes during switching.',
        codeSnippet: `// Inductive Load Suppression Setup
// Ensure 1N4007 cathode is connected to 24V rail 
// and anode is connected to MOSFET drain terminal.`
      }
    ]
  },
  {
    slug: 'communication-networking-rs485-modbus',
    title: '4. Communication & Networking (RS-485 / Modbus)',
    category: 'Pillar 4: Networking',
    readTime: '20 min read',
    lastUpdated: 'Jan 22, 2026',
    level: 'Advanced',
    status: 'Published',
    overview: 'Mastering Modbus RTU, differential A/B data lines, termination resistors ($120\\Omega$), and master/slave register mapping.',
    protocolFocus: 'Modbus RTU / RS-485 Backbones & Modbus TCP Ethernet Bridging.',
    hardwareBOM: ['MAX485 Transceiver Modules', 'W5500 Ethernet Module', '120Ω Resistors', 'Twisted Pair Cable'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'Modbus RTU & RS-485 Backbones', summary: 'Wiring differential data lines and multi-drop master/slave topologies.' },
      { id: 'sub-2', title: 'Modbus Register Mapping', summary: 'Reference table for holding registers, coils, and discrete inputs.' }
    ],
    sections: [
      {
        title: '1. Master vs. Slave Architectures',
        content: 'Teaching how a central CPU (Master) polls remote I/O nodes using unique register addresses over robust RS-485 serial buses.',
        codeSnippet: `// Modbus RTU Polling Structure Example
#include <ModbusMaster.h>
ModbusMaster node;

void setup() {
  Serial2.begin(9600, SERIAL_8N1);
  node.begin(1, Serial2); // Slave ID 1
}

void loop() {
  uint8_t result = node.readHoldingRegisters(0x00, 2);
  if (result == node.ku8MBSuccess) {
    uint16_t sensorVal = node.getResponseBuffer(0);
  }
  delay(1000);
}`
      }
    ]
  },
  {
    slug: 'software-iec61131-openplc-tutorials',
    title: '5. Software & IEC 61131-3 Tutorials (OpenPLC)',
    category: 'Pillar 5: Software & PLC',
    readTime: '25 min read',
    lastUpdated: 'Jan 21, 2026',
    level: 'Intermediate',
    status: 'Published',
    overview: 'Installing OpenPLC, understanding IEC 61131-3 Structured Text (ST) and Ladder Logic (LD), and mapping physical pins to industrial memory addresses.',
    protocolFocus: 'IEC 61131-3 Programming Standards & PLC Scan Cycle Determinism.',
    hardwareBOM: ['Arduino / ESP32 Controller', 'OpenPLC Runtime', 'OpenPLC Editor'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'OpenPLC Quickstart & Pin Mapping', summary: 'Mapping hardware MOSFET channels to %QX0.0 through %QX0.7 memory addresses.' },
      { id: 'sub-2', title: 'Structured Text (ST) Code Library', summary: 'Sample scripts for timers, tank level controls, and motor interlocks.' }
    ],
    sections: [
      {
        title: '1. The PLC Scan Cycle',
        content: 'Explaining how a PLC deterministically reads inputs, executes logic scan tables, and updates outputs.'
      },
      {
        title: '2. Structured Text (ST) Timer Interlock Example',
        content: 'Sample IEC 61131-3 Structured Text implementation for automated motor control.',
        codeSnippet: `// IEC 61131-3 Structured Text (ST) Example
PROGRAM MotorInterlock
VAR
  StartButton AT %IX0.0 : BOOL;
  StopButton AT %IX0.1 : BOOL;
  MotorOutput AT %QX0.0 : BOOL;
  RunTimer : TON;
END_VAR

RunTimer(IN := StartButton AND NOT StopButton, PT := T#5s);
IF StartButton AND NOT StopButton THEN
  MotorOutput := TRUE;
ELSIF StopButton OR NOT RunTimer.Q THEN
  MotorOutput := FALSE;
END_IF;
END_PROGRAM`
      }
    ]
  }
];