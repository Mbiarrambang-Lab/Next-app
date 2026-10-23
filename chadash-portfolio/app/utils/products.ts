import { StaticImageData } from 'next/image';
import plcImage from '@/app/images/plc-x1.jpg';
import expansionImage from '@/app/images/expansion-card.jpg';
import picowImage from '@/app/images/picow-shell.jpg';

export interface ShopItem {
  id: string;
  name: string;
  image: StaticImageData | string;
  tagline: string;
  price: string;
  compatibility: string;
  features: string[];
  status: 'In Stock' | 'Pre-Order' | 'Custom Run';
}

export const shopInventory: ShopItem[] = [
  {
    id: 'Prod_01',
    name: 'Chadash PLC-X1 V1.1',
    image: plcImage,
    tagline: 'Rugged smart controller for power and equipment automation.',
    price: '30,000 XAF',
    compatibility: 'ESP32 Smart Core, Relays',
    features: ['Snap-fit case', 'Cable ports', 'Thermal grilles'],
    status: 'In Stock'
  },
  {
    id: 'Prod_02',
    name: 'I/O Expansion Cards',
    image: expansionImage,
    tagline: 'Plug-and-play circuit boards to expand sensors and switches.',
    price: '10,000 XAF',
    compatibility: 'PLC-X1 V1.1, Arduino',
    features: ['Bus alignment', 'Screw terminals', 'Surge protection'],
    status: 'In Stock'
  },
  {
    id: 'Prod_03',
    name: 'PicoW Prototyping Shell',
    image: picowImage,
    tagline: 'Protective desk-side housing built for Pi Pico W modules.',
    price: '11,000 XAF',
    compatibility: 'Pi Pico / Pico W, Displays',
    features: ['OLED viewport', 'Cable channels', 'Compact footprint'],
    status: 'Pre-Order'
  },
  {
    id: 'Prod_04',
    name: 'Full Cassava Processing Station',
    image: plcImage,
    tagline: 'Solutions for schools and universities for teaching and STEM',
    price: 'Custom Pricing',
    compatibility: 'Varies by Application',
    features: ['Modular Design', 'Specific Use Cases', 'Support'],
    status: 'Custom Run'
  }
];