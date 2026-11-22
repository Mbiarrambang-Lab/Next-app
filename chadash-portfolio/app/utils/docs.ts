import type { StaticImageData } from 'next/image';
import RoboticArmImage from '../images/robot-arm.jpg';
import CarWashImage from '../images/car-wash.jpg';
import CarAssemblyLineImage from '../images/car-assembly.jpg';
import CassavaStationImage from '../images/cassava-processing.jpg';
import CocoaStationImage from '../images/cocoa-processing.jpg';


export interface SubSection {
  id: string;
  title: string;
  summary: string;
  content?: string;
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
  img?: string | StaticImageData;
  subsections: SubSection[];
  sections: { title: string; content: string; codeSnippet?: string }[];
  stationSpecs?: {
    subtitle: string;
    image: string | StaticImageData;
    power: string;
    channels: string;
    enclosure: string;
    application: string;
  };
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
    img: '../images/chadash-ECUI24.png',
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
    title: 'Beginner Communication Protocols',
    category: 'Communication',
    readTime: '15 min read',
    lastUpdated: 'Jan 22, 2026',
    level: 'Beginner',
    status: 'Published',
    overview: 'Start with common wired interfaces used to connect microcontrollers to computers, sensors, and nearby peripherals.',
    protocolFocus: 'UART, I2C, SPI, and USB.',
    hardwareBOM: ['Arduino or ESP32 Controller', 'USB-to-Serial Adapter', 'I2C Sensor or RTC Module', 'SPI Peripheral', 'Jumper Wires'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      {
        id: 'sub-0',
        title: '1. UART Communication',
        summary: 'Understanding UART communication principles and proper wiring techniques.',
        content: String.raw`UART is an asynchronous, point-to-point serial interface. Connect TX to the other device’s RX, RX to TX, and share a signal ground; configure both endpoints for the same baud rate, data bits, parity, and stop bits. UART is commonly used for console access, GPS modules, and simple MCU-to-MCU links.

How UART works
UART (Universal Asynchronous Receiver/Transmitter) sends serial data without a shared clock line.

Two devices agree on:

Baud rate (bit rate)
Data bits (often 8)
Parity (none/even/odd)
Stop bits (1 or 2)
This is commonly written as 115200 8N1.

Each frame typically includes:

1 start bit (low)
5 to 9 data bits
optional parity
1 or more stop bits (high)
TX/RX communication
TX of device A goes to RX of device B
RX of device A goes to TX of device B
Ground reference must be shared

flowchart LR
  MCU_A_TX --> MCU_B_RX
  MCU_B_TX --> MCU_A_RX
  GND_A --- GND_B

Asynchronous communication characteristics
Because there is no separate clock wire, timing tolerance matters. Internal clocks must be accurate enough so sampling points stay valid across the frame.

Typical baud rates
9600
19200
38400
57600
115200
230400
921600
1M+ (platform dependent)

Advantages
Very simple hardware and software
Low pin count (TX, RX, GND)
Excellent for logs, CLI, and bootloader interfaces
Limitations
Usually point-to-point only
No built-in addressing/arbitration
No inherent error correction (beyond parity)
Limited long-distance robustness unless converted to RS-232/RS-485 levels
Typical use cases
Debug console from MCU to USB-UART adapter
GNSS and cellular module interfaces
Bootloader flashing and diagnostics
Console access to Linux SBCs (Raspberry Pi, custom SoMs)

STM32 UART debug example (HAL, C)
#include "usart.h"
#include <string.h>

void debug_log(const char *msg)
{
    HAL_UART_Transmit(&huart2, (uint8_t *)msg, strlen(msg), 100);
}

int main(void)
{
    HAL_Init();
    SystemClock_Config();
    MX_USART2_UART_Init();

    debug_log("System booted\r\n");

    while (1) {
        debug_log("Heartbeat\r\n");
        HAL_Delay(1000);
    }
}`,
      },
      {
        id: 'sub-2',
        title: '2. I2C Communication',
        summary: 'Understanding I2C communication principles and proper wiring techniques.',
        content: String.raw`I2C (Inter-Integrated Circuit) is a synchronous, addressed, multi-drop bus using two lines.

I2C signal lines
SDA: Serial Data
SCL: Serial Clock
Both are open-drain/open-collector style, requiring pull-up resistors.

Addressing and multi-device communication
7-bit addressing is most common
10-bit addressing exists for larger address space
Master initiates communication with START condition and address+R/W bit
Multi-master capability
I2C supports multi-master arbitration in theory and in many controllers. In practice, many designs use single master for simplicity.

Pull-up resistors and why they matter
Since lines are open-drain, devices pull low but never drive high. Pull-ups define rise time and affect maximum speed and bus stability.

Typical values: 1 kOhm to 10 kOhm depending on voltage, bus capacitance, speed, and node count.

Advantages
Very low pin count
Easy to connect many low-speed peripherals
Address-based communication reduces CS line explosion
Disadvantages
Slower than SPI for high-throughput needs
Bus capacitance limits speed and length
Address collisions possible
Debugging bus lockups can be tricky
Common use cases
Temperature/pressure sensors
RTC devices
EEPROM
PMIC configuration and board management
STM32 I2C sensor read example (HAL, C)
#include "i2c.h"
#include <stdint.h>

#define TMP102_ADDR       (0x48 << 1) // HAL expects shifted 8-bit address
#define TMP102_REG_TEMP   0x00

float read_temp_c(void)
{
    uint8_t reg = TMP102_REG_TEMP;
    uint8_t raw[2] = {0};

    HAL_I2C_Master_Transmit(&hi2c1, TMP102_ADDR, &reg, 1, 100);
    HAL_I2C_Master_Receive(&hi2c1, TMP102_ADDR, raw, 2, 100);

    int16_t value = (int16_t)((raw[0] << 8) | raw[1]);
    value >>= 4;
    if (value & 0x0800) value |= 0xF000; // sign extend

    return value * 0.0625f;
}
Debug note: If the I2C bus hangs low, check pull-up sizing, clock stretching support, and recovery sequence (toggle SCL manually and reinit peripheral).
`
      },
      {
        id: 'sub-3',
        title: '3. SPI Communication',
        summary: 'Understanding SPI communication principles and proper wiring techniques.',
        content: String.raw`SPI (Serial Peripheral Interface) is a synchronous master-slave bus optimized for short-distance, high-speed communication.

SPI signal lines
MOSI: Master Out, Slave In
MISO: Master In, Slave Out
SCK: Serial Clock from master
CS/SS: Chip Select (per slave, typically active low)
flowchart LR
  M[Master MCU]
  S1[Flash]
  S2[Display]
  S3[ADC]
  M -- MOSI/MISO/SCK --> S1
  M -- MOSI/MISO/SCK --> S2
  M -- MOSI/MISO/SCK --> S3
  M -- CS1 --> S1
  M -- CS2 --> S2
  M -- CS3 --> S3
Full-duplex communication
SPI shifts bits in both directions simultaneously. While master sends one byte, it also receives one byte.

Master/slave architecture
One master controls clock and selects active slave
Multiple slaves can share MOSI/MISO/SCK, each with own CS line
Advantages
High throughput compared with UART/I2C
Simple framing for many peripherals
Deterministic timing (clocked by master)
Good for low-latency peripheral transfers
Disadvantages
More wires than I2C
No built-in addressing
No native multi-master arbitration in common usage
Longer distances are problematic (signal integrity)
Common SPI peripherals
NOR/NAND flash memory
TFT/OLED displays
Fast sensors (IMU, ADC)
DAC/ADC converters
Linux userspace SPI example (spidev, C)
#include <fcntl.h>
#include <linux/spi/spidev.h>
#include <stdint.h>
#include <stdio.h>
#include <sys/ioctl.h>
#include <unistd.h>

int main(void)
{
    int fd = open("/dev/spidev0.0", O_RDWR);
    if (fd < 0) return 1;

    uint8_t mode = SPI_MODE_0;
    uint32_t speed = 10000000; // 10 MHz
    ioctl(fd, SPI_IOC_WR_MODE, &mode);
    ioctl(fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed);

    uint8_t tx[] = {0x9F, 0x00, 0x00, 0x00}; // JEDEC ID command
    uint8_t rx[sizeof(tx)] = {0};

    struct spi_ioc_transfer tr = {
        .tx_buf = (unsigned long)tx,
        .rx_buf = (unsigned long)rx,
        .len = sizeof(tx),
        .speed_hz = speed,
        .bits_per_word = 8,
    };

    if (ioctl(fd, SPI_IOC_MESSAGE(1), &tr) < 1) {
        close(fd);
        return 2;
    }

    printf("Flash ID: %02X %02X %02X\n", rx[1], rx[2], rx[3]);
    close(fd);
    return 0;
}`
      },
      {
        id: 'sub-6',
        title: '4. USB',
        summary: 'Using USB for PC peripherals, firmware updates, CDC serial links, and host-centric device communication.',
        content: String.raw`USB Explained: Host/Device Model, Classes, and Power
USB is ubiquitous but more complex than UART/SPI/I2C.

Host/device model
One host controls bus transactions
One or more devices respond
Hubs expand topology
Most MCUs implement USB device mode. Some support OTG/host.

USB classes in embedded products
Common classes:

CDC ACM (virtual serial port)
HID (human interface device)
MSC (mass storage)
Audio, Video, DFU (device firmware update)
Power delivery basics
USB can supply power (current limits depend on version/negotiation)
USB-C with PD enables higher power profiles
Embedded design must handle inrush, protection, and role negotiation correctly
Typical embedded applications
USB-to-serial debug and CLI
Firmware update via DFU or MSC drag-and-drop
Data logger export as mass storage
Human interface accessories
Common mistake: Treating USB like “just serial.” Enumeration, descriptors, endpoint management, and host behavior add significant integration complexity.`
      }
    ],
    sections: [
      {
        title: 'Choosing a First Interface',
        content: 'Use UART for a simple point-to-point serial link, I2C when several nearby addressed peripherals share two signal lines, SPI when a peripheral needs faster synchronous transfers, and USB when connecting a device to a computer or USB host. Check voltage levels and the hardware datasheet before wiring.'
      }
    ]
  },
  {
    slug: 'intermediate-communication-protocols',
    title: 'Intermediate Communication Protocols',
    category: 'Communication',
    readTime: '25 min read',
    lastUpdated: 'Jan 22, 2026',
    level: 'Intermediate',
    status: 'Published',
    overview: 'Build on basic serial interfaces with networked, differential, and industrial protocols for multi-node systems and connected devices.',
    protocolFocus: 'USART synchronous mode, CAN/CAN FD, RS-232, RS-485, Ethernet, Wi-Fi, LIN, Modbus RTU/TCP, and MQTT.',
    hardwareBOM: ['CAN Transceiver', 'MAX485 Transceiver', 'W5500 Ethernet Module', 'ESP32 Wi-Fi Node', 'LIN Transceiver', 'Jumper Wires'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    subsections: [
      {
        id: 'sub-0',
        title: '1. USART Communication',
        summary: 'Understanding synchronous and asynchronous USART operating modes.',
        content: 'USART hardware supports asynchronous serial operation like UART and, on many MCUs, a synchronous mode using a clock signal. In asynchronous mode, match baud rate and frame settings at both ends; in synchronous mode, also configure clock polarity, phase, and direction as required by the device.'
      },
      {
        id: 'sub-1',
        title: '2. CAN and CAN FD',
        summary: 'Using multi-node CAN arbitration and the higher-speed CAN FD data phase for automotive and industrial equipment.',
        content: 'CAN is a differential, multi-node bus where message identifiers arbitrate access and help prioritize traffic. Use a suitable CAN transceiver, a correctly terminated trunk (typically 120 ohms at each physical end), and keep stubs short. CAN FD supports larger payloads and a faster data phase; all nodes must support the selected frame format and bit timing.'
      },
      {
        id: 'sub-2',
        title: '3. RS-232 and RS-485',
        summary: 'Comparing point-to-point RS-232 with long-distance, multi-drop RS-485 differential signaling.',
        content: 'RS-232 is a single-ended point-to-point serial link commonly used for legacy equipment and service consoles. RS-485 uses differential A/B signaling for better noise immunity and multi-drop networks; use a twisted pair, terminate the two ends of the trunk, and control driver enable so only one half-duplex node transmits at a time.'
      },
      {
        id: 'sub-3',
        title: '4. Ethernet and Wi-Fi',
        summary: 'Connecting controllers to switched LAN networks and wireless IoT infrastructure through Ethernet and Wi-Fi.',
        content: 'Ethernet connects nodes through switches and typically requires correct link hardware, IP configuration, and network services. Wi-Fi connects through an access point and adds radio coverage, authentication, and interference considerations. Both can carry application protocols such as HTTP, Modbus TCP, or MQTT; secure networks with appropriate credentials and access controls.'
      },
      {
        id: 'sub-4',
        title: '5. LIN Bus',
        summary: 'Using the low-cost, master-controlled LIN bus for automotive body electronics and local subnets.',
        content: 'LIN is a low-cost, single-wire serial network with one master scheduling communication to multiple slaves. The master’s schedule table determines when frames are sent, making timing predictable for simple body electronics. Use a LIN transceiver and configure node identifiers and frame schedules consistently.'
      },
      {
        id: 'sub-5',
        title: '6. Modbus RTU and Modbus TCP',
        summary: 'Polling industrial devices over serial RS-485 or encapsulating Modbus requests over Ethernet TCP.',
        content: 'Modbus RTU frames are transmitted over serial links, commonly RS-485, and use device addresses plus CRC checks. Modbus TCP carries Modbus requests over Ethernet TCP and uses a transaction identifier rather than the RTU CRC. For either variant, map register addresses and data types to the equipment documentation and respect device timing limits.'
      },
      {
        id: 'sub-6',
        title: '7. MQTT',
        summary: 'Publishing telemetry and subscribing to commands through lightweight broker-based MQTT messaging.',
        content: 'MQTT is a broker-based publish/subscribe messaging protocol commonly used for IoT telemetry. Clients publish to named topics and subscribe to topics of interest; choose QoS based on delivery needs, use retained messages and last-will messages deliberately, and protect deployments with TLS and per-client authentication.'
      }
    ],
    sections: [
      {
        title: 'Matching Protocols to a System',
        content: 'Use CAN or LIN for suitable multi-node control networks, RS-485 for robust serial links, Ethernet or Wi-Fi for IP networks, Modbus for exchanging industrial registers, and MQTT for broker-based telemetry. Confirm topology, distance, timing, device support, and security needs before selecting a protocol.'
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
    img: CassavaStationImage,
    subsections: [
      { id: 'sub-1', title: 'Grating Motor Interlocks', summary: 'Safety cut-off mechanisms triggered during mechanical enclosure openings.' },
      { id: 'sub-2', title: 'Dehydration Chamber PID Control', summary: 'Maintaining precise drying temperatures for flour production.' }
    ],
    sections: [
      {
        title: '1. System Architecture & Safety Interlocks',
        content: 'The Cassava Processing Station requires failsafe mechanical cut-offs linked directly to hardware interrupt pins.'
      }
    ],
    stationSpecs: {
      subtitle: 'Agricultural Processing',
      image: CassavaStationImage,
      power: '24V DC / AC Relays',
      channels: '8 Opto In / 6 Relay Out',
      enclosure: 'IP54 DIN-Rail Box',
      application: 'Cassava Grating & Drying',
    }
  },
  {
    slug: 'robotic-arm-controller-station',
    title: 'Robotic Arm Controller Station',
    category: 'Station',
    readTime: '25 min read',
    lastUpdated: 'Jan 22, 2026',
    level: 'Advanced',
    status: 'Published',
    overview: 'Automated robotic arm control panels designed for industrial assembly lines and STEM training laboratories in Cameroon.',
    protocolFocus: 'Modbus RTU, Position Feedback, and Emergency Stop.',
    hardwareBOM: ['Chadash PLC-X1 V1.1', 'Stepper Motor Drivers', '12V Stepper Motors', 'Limit Switches'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    img: RoboticArmImage,
    subsections: [
      { id: 'sub-1', title: 'Emergency Stop and Limit Interlocks', summary: 'Hardware cut-offs triggered by operator controls and mechanical limit switches.' },
      { id: 'sub-2', title: 'Axis Position and Speed Control', summary: 'Coordinated stepper motion with position feedback and controlled acceleration.' }
    ],
    sections: [
      {
        title: '1. System Architecture and Safety Interlocks',
        content: 'The robotic arm station uses hardware limit switches and an emergency stop circuit to prevent uncontrolled axis movement.'
      }
    ],
    stationSpecs: {
      subtitle: 'Robotic Motion Control',
      image: RoboticArmImage,
      power: '24V DC',
      channels: 'Stepper Drivers / Limit Inputs',
      enclosure: 'DIN-Rail and Motor Control Box',
      application: 'Industrial and Educational Robotic Arms',
    }
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
    img: CocoaStationImage,
    subsections: [
      { id: 'sub-1', title: '5-Day Fermentation Scheduling', summary: 'Using RTC modules to track automated bean turning intervals.' },
      { id: 'sub-2', title: 'Moisture Curve Logging', summary: 'Monitoring ambient humidity to prevent mold formation during sun-drying phases.' }
    ],
    sections: [
      {
        title: '1. Fermentation Batch Tracking',
        content: 'Tracking exact temperature curves across 5-day bean fermentation cycles to ensure export-grade quality.'
      }
    ],
    stationSpecs: {
      subtitle: 'Fermentation & Drying',
      image: CocoaStationImage,
      power: '5V-12V DC / Battery',
      channels: 'Wi-Fi + 4 Sensor Ports',
      enclosure: '3D-Printed ABS Shell',
      application: 'Cocoa Batch Monitoring',
    }
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
    youtubeEmbedId: 'dQw4w9WgXcQ',
    img: CarWashImage,
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
    ],
    stationSpecs: {
      subtitle: 'Bay Wash Controller',
      image: CarWashImage,
      power: '12V DC / 24V Solenoids',
      channels: '12 Opto In / 8 Relay Out',
      enclosure: 'IP65 Weatherproof Box',
      application: 'Car Wash & Water Reclamation',
    }
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
    youtubeEmbedId: 'dQw4w9WgXcQ',
    img: CarAssemblyLineImage,
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
    ],
    stationSpecs: {
      subtitle: 'CAN Bus Assembly Node',
      image: CarAssemblyLineImage,
      power: '24V DC Industrial Bus',
      channels: 'CAN Bus + 16 I/O',
      enclosure: 'DIN-Rail Industrial Rack',
      application: 'Robotic Chassis & Conveyor Sync',
    }
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
    overview: 'Mastering Modbus RTU, differential A/B data lines, termination resistors (120 ohms), and master/slave register mapping.',
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

// Dynamically generate STATIONS from curriculumDocs items that have stationSpecs defined
export const STATIONS = curriculumDocs
  .filter((doc) => doc.stationSpecs)
  .map((doc) => ({
    name: doc.title,
    slug: doc.slug,
    ...doc.stationSpecs!,
  }));