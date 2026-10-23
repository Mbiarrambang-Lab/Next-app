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
  // ================= BEGINNER LEVEL =================
  {
    slug: 'getting-started-company-mission',
    title: 'Getting Started for Beginners & Mission',
    category: 'Automation Basics',
    readTime: '8 min read',
    lastUpdated: 'Jan 25, 2026',
    level: 'Beginner',
    status: 'Published',
    overview: 'What is industrial automation, why choose automation, and the Chadash Labs mission to provide open-source hardware and structured training for DIYers and professionals alike.',
    protocolFocus: 'Why, How, What is automation? Open-Source Hardware Philosophy vs. Proprietary Commercial Lock-in.',
    hardwareBOM: ['Chadash PLC-X1 Controller', 'Open-Source Toolchain', 'Documentation Guides'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'About Chadash Automation', summary: 'Our mission to bridge the automation gap by providing accessible hardware and structured training.' },
      { id: 'sub-2', title: 'Open-Source vs. Commercial Convenience', summary: 'Comparing high-cost proprietary PLCs to transparent, locally serviceable open-source blueprints.' },
      { id: 'sub-3', title: 'What, Why, and How to do Industrial Automation', summary: 'A beginner-friendly guide to understanding industrial automation and its core benefits.' }
    ],
    sections: [
      {
        title: '1. The High Cost of Industrial Automation',
        content: 'Traditional industrial control systems carry prohibitive import tariffs and licensing fees. Chadash Automation provides open-source blueprints alongside fully assembled, plug-and-play hardware.'
      }
    ]
  },
  {
    slug: 'basics-of-electrical-circuits',
    title: 'Basics of Electrical Circuits',
    category: 'Automation Basics',
    readTime: '8 min read',
    lastUpdated: 'Jan 25, 2026',
    level: 'Beginner',
    status: 'Published',
    overview: 'An introduction to electrical circuits, industrial automation, and the foundational electronics principles needed to build robust hardware controllers.',
    protocolFocus: 'Voltage, Current, Resistance, Ohm’s Law, and Basic Circuit Analysis.',
    hardwareBOM: ['Arduino Uno', 'Arduino IDE', 'Documentation Guides'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'Basics of Electrical Circuits', summary: 'Understanding closed loops, voltage drop, and electrical safety standards.' },
      { id: 'sub-2', title: 'Tools needed for Electrical Circuit Analysis', summary: 'A list of essential tools including multimeters, breadboards, and DC power supplies.' },
      { id: 'sub-3', title: 'Microcontrollers in Industrial Automation', summary: 'What are microcontrollers and how are they used in modern industrial automation systems?' }
    ],
    sections: [
      {
        title: '1. The Importance of Circuit Fundamentals',
        content: 'Before stepping into programmable logic, engineers must master voltage dividers, current ratings, and safe grounding practices to protect sensitive microcontrollers.'
      }
    ]
  },
  {
    slug: 'projects-and-case-studies',
    title: 'Projects and Case Studies',
    category: 'Automation Basics',
    readTime: '8 min read',
    lastUpdated: 'Jan 25, 2026',
    level: 'Beginner',
    status: 'Published',
    overview: 'Real-world projects related to microcontrollers and how to apply them in automation, including case studies of agricultural and smart system applications.',
    protocolFocus: 'Projects using Arduino, ESP32, and other microcontrollers for industrial automation and smart home applications.',
    hardwareBOM: ['Arduino Uno', 'ESP32', 'NodeMCU', 'Raspberry Pi Pico W', 'Documentation Guides'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'Arduino Projects', summary: 'Foundational sensor reading and relay actuation projects for beginners.' },
      { id: 'sub-2', title: 'ESP32 Projects', summary: 'Wi-Fi enabled IoT dashboards and wireless telemetry systems.' },
      { id: 'sub-3', title: 'NodeMCU Projects', summary: 'Low-cost connected automation nodes for local sensor networks.' },
      { id: 'sub-4', title: 'Raspberry Pi Pico W Projects', summary: 'MicroPython-powered real-time control applications.' }
    ],
    sections: [
      {
        title: '1. Bridging Theory with Practice',
        content: 'Case studies demonstrate how open-source microcontrollers solve practical automation challenges in local industries without breaking the bank.'
      }
    ]
  },
  {
    slug: 'hardware-documentation-mcus',
    title: 'Hardware Documentation for MCUs',
    category: 'Hardware Specs',
    readTime: '15 min read',
    lastUpdated: 'Jan 23, 2026',
    level: 'Beginner',
    status: 'Published',
    overview: 'Technical specifications, pinouts, electrical ratings, and optical isolation basics for popular microcontroller families.',
    protocolFocus: 'Galvanic Isolation & Powering Microcontrollers Safely.',
    hardwareBOM: ['Any MCU (Arduino, ESP32, Raspberry Pi)', 'LM2596 Buck Converter / USB Power'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'Arduino (All Variants)', summary: 'Detailed pinouts and electrical ratings for driving Arduino boards.' },
      { id: 'sub-2', title: 'ESP32 (All Variants)', summary: 'Detailed pinouts and electrical ratings for driving ESP32 boards.' },
      { id: 'sub-3', title: 'Raspberry Pi (All Variants)', summary: 'Detailed pinouts and electrical ratings for driving Raspberry Pi boards.' }
    ],
    sections: [
      {
        title: '1. Power Management & Regulation',
        content: 'Ensuring stable power delivery to microcontrollers using buck regulators and clean decoupling capacitors.'
      }
    ]
  },

  // ================= INTERMEDIATE LEVEL =================
  {
    slug: 'services-engineering-solutions',
    title: 'Services & Engineering Solutions',
    category: 'Services Directory',
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
    slug: 'software-iec61131-openplc-tutorials',
    title: 'Software & IEC 61131-3 Tutorials (OpenPLC)',
    category: 'Software & PLC',
    readTime: '25 min read',
    lastUpdated: 'Jan 21, 2026',
    level: 'Intermediate',
    status: 'Published',
    overview: 'Installing OpenPLC, understanding IEC 61131-3 Structured Text (ST) and Ladder Logic (LD), and mapping physical pins to industrial memory addresses.',
    protocolFocus: 'IEC 61131-3 Programming Standards & PLC Scan Cycle Determinism.',
    hardwareBOM: ['Arduino / ESP32 Controller', 'OpenPLC Runtime', 'OpenPLC Editor'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: '1. OpenPLC Quickstart & Pin Mapping', summary: 'Mapping hardware MOSFET channels to %QX0.0 through %QX0.7 memory addresses.' },
      { id: 'sub-2', title: '2. Structured Text (ST) Code Library', summary: 'Sample scripts for timers, tank level controls, and motor interlocks.' },
      { id: 'sub-3', title: '3. Ladder Logic (LD) Code Library', summary: 'Sample ladder diagrams for motor starters, interlocks, and sequential control.' }
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
  },
  {
    slug: 'communication-networking-uart-i2c-spi-ethernet-wifi',
    title: 'Basic MCU Communications (UART, I2C, SPI, Ethernet, WiFi)',
    category: 'Communication',
    readTime: '20 min read',
    lastUpdated: 'Jan 22, 2026',
    level: 'Intermediate',
    status: 'Published',
    overview: 'Understanding asynchronous serial communication, I2C addressing, SPI synchronous buses, and wireless IoT protocols across microcontroller nodes.',
    protocolFocus: 'UART, I2C, SPI, Ethernet (W5500), and Wi-Fi Transceivers.',
    hardwareBOM: ['MAX485 Transceiver', 'W5500 Ethernet Module', 'ESP32 Wi-Fi Node', 'Jumper Wires'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-0', title: '1. UART Communication', summary: 'Understanding UART communication principles and proper wiring techniques.' },
      { id: 'sub-1', title: '2. I2C Communication', summary: 'Understanding I2C communication principles and proper wiring techniques.' },
      { id: 'sub-2', title: '3. SPI Communication', summary: 'Understanding SPI communication principles and proper wiring techniques.' },
      { id: 'sub-3', title: '4. Ethernet & WiFi', summary: 'Understanding Ethernet and WiFi communication principles and proper wiring techniques.' }
    ],
    sections: [
      {
        title: '1. Serial Protocol Overview',
        content: 'Comparing single-wire asynchronous framing (UART) with multi-device synchronous buses (I2C/SPI) for local sensor integration.'
      }
    ]
  },

  // ================= ADVANCED LEVEL =================
  {
    slug: 'hardware-documentation-chadash-devices',
    title: 'Hardware Documentation for our devices (IEC 61131-2)',
    category: 'Hardware Specs',
    readTime: '15 min read',
    lastUpdated: 'Jan 23, 2026',
    level: 'Advanced',
    status: 'Published',
    overview: 'Technical specifications, pinouts, 8-channel MOSFET sinking topology, electrical ratings, and optical isolation barriers (IEC 61131-2 compliance).',
    protocolFocus: 'Galvanic Isolation, LM2596 Power Regulation, and Flyback Diode Suppression.',
    hardwareBOM: ['Chadash-DMO8-24V Board', 'LM2596 Buck Converter', 'PC817 Optocouplers', '1N4007 Diodes'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'Chadash-DMO8-24V I/O', summary: 'Detailed pinouts and electrical ratings for driving digital outputs and inductive loads safely.' },
      { id: 'sub-2', title: 'Chadash PLC-X1 V1.1 (IEC 61131-2)', summary: 'Compact base PLC with onboard digital input and output capabilities.' }
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
    title: 'Communication & Networking (RS-485 / Modbus)',
    category: 'Communication',
    readTime: '20 min read',
    lastUpdated: 'Jan 22, 2026',
    level: 'Advanced',
    status: 'Published',
    overview: 'Mastering Modbus RTU, differential A/B data lines, termination resistors ($120\\Omega$), and master/slave register mapping.',
    protocolFocus: 'Modbus RTU / RS-485 Backbones & Modbus TCP Ethernet Bridging.',
    hardwareBOM: ['MAX485 Transceiver Modules', 'W5500 Ethernet Module', '120Ω Resistors', 'Twisted Pair Cable'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-0', title: '1. PLC Backplane and Wiring', summary: 'Understanding PLC backplane architecture and proper wiring techniques.' },
      { id: 'sub-1', title: '2. RS-485 & Differential Signaling', summary: 'Understanding A/B data lines, termination resistors, and noise immunity in industrial environments.' },
      { id: 'sub-2', title: '3. Modbus RTU & RS-485 Backbones', summary: 'Wiring differential data lines and multi-drop master/slave topologies.' },
      { id: 'sub-3', title: '4. Modbus Register Mapping', summary: 'Reference table for holding registers, coils, and discrete inputs.' }
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
  }
];