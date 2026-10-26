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
    category: 'Hardware & Specs',
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

  // ================= ADVANCED LEVEL (STATION GUIDES) =================
  {
    slug: 'station-cassava-processing',
    title: 'Full Cassava Processing Station Integration',
    category: 'Station',
    readTime: '25 min read',
    lastUpdated: 'Jan 22, 2026',
    level: 'Advanced',
    status: 'Published',
    overview: 'Automated slicing, grating, and drying control panels designed for agricultural cooperatives and STEM universities in Cameroon.',
    protocolFocus: 'UART Telemetry, Temperature Feedback, and Emergency Cut-Off Relays.',
    hardwareBOM: ['Chadash PLC-X1 V1.1', 'DS18B20 Waterproof Sensor', 'High-Torque DC Motor Relays'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: 'Grating Motor Interlocks', summary: 'Safety cut-off mechanisms triggered during mechanical enclosure openings.' },
      { id: 'sub-2', title: 'Dehydration Chamber PID Control', summary: 'Maintaining precise drying temperatures for flour production.' }
    ],
    sections: [
      {
        title: '1. System Architecture & Safety Interlocks',
        content: 'The Cassava Processing Station requires failsafe mechanical cut-offs linked directly to hardware interrupt pins.'
      }
    ]
  },
  {
    slug: 'station-cocoa-fermentation',
    title: 'Cocoa Fermentation & Drying Station Automation',
    category: 'Station',
    readTime: '20 min read',
    lastUpdated: 'Jan 21, 2026',
    level: 'Advanced',
    status: 'Published',
    overview: 'Automated fermentation batch timing and moisture monitoring systems tailored for local cocoa farmers and processing centers.',
    protocolFocus: 'Real-Time Clock (RTC) scheduling and humidity sensing.',
    hardwareBOM: ['ESP32 Node', 'DHT22 Humidity Sensor', 'DS1307 RTC Module', 'Relay Actuators'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-1', title: '5-Day Fermentation Scheduling', summary: 'Using RTC modules to track automated bean turning intervals.' },
      { id: 'sub-2', title: 'Moisture Curve Logging', summary: 'Monitoring ambient humidity to prevent mold formation during sun-drying phases.' }
    ],
    sections: [
      {
        title: '1. Fermentation Batch Tracking',
        content: 'Tracking exact temperature curves across 5-day bean fermentation cycles to ensure export-grade quality.'
      }
    ]
  },
  {
    slug: 'car-wash-automation',
    title: 'Car Wash Automation',
    category: 'Station',
    readTime: '20 min read',
    lastUpdated: 'Jan 21, 2026',
    level: 'Advanced',
    status: 'Published',
    overview: 'Automated conveyor and bay car wash systems featuring precise chemical dosing arrays, high-pressure hydraulic loops, and real-time graywater reclamation monitoring.',
    protocolFocus: 'Real-Time Clock (RTC) cycle scheduling, optical vehicle tracking, and bay humidity dissipation routing.',
    hardwareBOM: [
      'ESP32 NodeMCU Controller',
      'DHT22 High-Precision Humidity Sensor',
      'DS1307 I2C RTC Module',
      'Optocoupled Multi-Channel Relay Bank',
      'Ultrasonic Proximity Sensors (Vehicle Detection)',
      '12V Solenoid Fluid Valves'
    ],
    youtubeEmbedId: 'dQw4w9WgXcQ', // Placeholder link remains intact
    subsections: [
      {
        id: 'sub-1',
        title: 'Wash Cycle Phase Scheduling',
        summary: 'Leveraging hardware RTC registers to coordinate strict millisecond-level step switches between undercarriage rinse, active foam, and high-pressure wax cycles.'
      },
      {
        id: 'sub-2',
        title: 'Bay Humidity & Ventilation Overrides',
        summary: 'Continuously reading ambient humidity curves to trigger forced-air extraction blowers, preventing lingering chemical vapor density and moisture build-up inside enclosed bays.'
      }
    ],
    sections: [
      {
        title: '1. Multi-Stage Automated Execution Loop',
        content: 'Executing timed industrial sequencing using non-blocking hardware interrupts. Once proximity sensors confirm vehicle orientation benchmarks, the system flags the RTC to record wash metadata, spins down fluid solenoids to prevent water hammer effects, and routes reclaimed wash water back through multi-stage filtration beds.'
      }
    ]
  },
  {
    slug: 'car-assembly-line-automation',
    title: 'Car Assembly Line Automation',
    category: 'Station',
    readTime: '25 min read',
    lastUpdated: 'Oct 26, 2026',
    level: 'Advanced',
    status: 'Published',
    overview: 'Robotic chassis mating and precision torque assembly loops featuring synchronous conveyor positioning, pneumatic actuators, and multi-node CAN bus monitoring.',
    protocolFocus: 'High-speed CAN bus data logging, infrared distance tracking, and millisecond-level pneumatic solenoid sequencing.',
    hardwareBOM: [
      'STM32 or ESP32 CAN Bus Controller Node',
      'MCP2515 CAN Transceiver Module',
      'Infrared Time-of-Flight (ToF) Distance Sensors',
      'High-Current Relay Drivers (Pneumatic Valves)',
      'NEMA 34 Stepper Motors & Drivers (Conveyor Sync)'
    ],
    youtubeEmbedId: 'dQw4w9WgXcQ', // Placeholder video link
    subsections: [
      {
        id: 'sub-1',
        title: 'Chassis Alignment & Proximity Detection',
        summary: 'Utilizing industrial Time-of-Flight sensors to calculate exact spatial orientation vectors before deploying heavy mechanical welding or framing tools.'
      },
      {
        id: 'sub-2',
        title: 'CAN Bus Telemetry Logging',
        summary: 'Aggregating localized motor telemetry, air pressure drops, and error packets over a shared industrial network layer to prevent critical assembly bottlenecks.'
      }
    ],
    sections: [
      {
        title: '1. Synchronized Assembly Interlocking Logic',
        content: 'Managing assembly line integrity through strict hardware interlocks. The controller continuously samples distance sensors to verify the vehicle frame is seated perfectly. If misalignment is detected, the node broadcasts an interrupt frame across the CAN bus network, completely freezing the conveyor drive motors to protect the multi-axis robotic sub-assemblies.'
      }
    ]
  },
  {
    slug: 'hardware-documentation-chadash-devices',
    title: 'Hardware Documentation for our devices (IEC 61131-2)',
    category: 'Hardware & Specs',
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
    overview: 'Mastering Modbus RTU, differential A/B data lines, termination resistors ($120\\Omega$), and master/slate register mapping.',
    protocolFocus: 'Modbus RTU / RS-485 Backbones & Modbus TCP Ethernet Bridging.',
    hardwareBOM: ['MAX485 Transceiver Modules', 'W5500 Ethernet Module', '120Ω Resistors', 'Twisted Pair Cable'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      { id: 'sub-0', title: '1. PLC Backplane and Wiring', summary: 'Understanding PLC backplane architecture and proper wiring techniques.' },
      { id: 'sub-1', title: '2. RS-485 & Differential Signaling', summary: 'Understanding A/B data lines, termination resistors, and noise immunity in industrial environments.' }
    ],
    sections: [
      {
        title: '1. Master vs. Slave Architectures',
        content: 'Teaching how a central CPU (Master) polls remote I/O nodes using unique register addresses over robust RS-485 serial buses.'
      }
    ]
  }
];