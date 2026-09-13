import { faTruckFast, faShield, faArrowRotateLeft, faHeadset } from '@fortawesome/free-solid-svg-icons';

export const ICON_SIZE = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-8 h-8',
  xl: 'w-10 h-10',
  xxl: 'w-12 h-12',
};

export const NAV_LINKS = ['Home', 'Products', 'About', 'Contact'];

export const ASSETS = {
  logo: '/src/assets/images/NovaCartLogo.webp',
  hero_background_horizontal: '/src/assets/images/HeroSectionBgHorizontal.webp',
  hero_background_vertical: '/src/assets/images/HeroSectionBgVertical.webp',
};

export const BENEFITS = [
  {
    title: 'Fast Delivery',
    description: 'Delivered in 24 hours',
    icon: faTruckFast,
  },
  {
    title: 'Quality Guarantee',
    description: 'Only Authentic Items',
    icon: faShield,
  },
  {
    title: 'Money-Back Guarantee',
    description: '14-Day Hassle-Free Returns',
    icon: faArrowRotateLeft,
  },
  {
    title: '24/7 Support',
    description: `We're Just a Message Away`,
    icon: faHeadset,
  },
];

export const DESKTOP_MQ = '(min-width: 768px)';