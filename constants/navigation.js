import {
  HouseFill,
  HouseRegular,
  LaptopFill,
  LaptopRegular,
  LetterFill,
  LetterRegular,
  UserFill,
  UserRegular,
} from '@/assets/icons';

const navigation = [
  {
    name: 'Home',
    link: '/',
    icon: {
      regular: HouseRegular,
      fill: HouseFill,
    },
  },
  {
    name: 'About',
    link: '/about',
    icon: {
      regular: UserRegular,
      fill: UserFill,
    },
  },
  {
    name: 'Projects',
    link: '/projects',
    icon: {
      regular: LaptopRegular,
      fill: LaptopFill,
    },
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: {
      regular: LetterRegular,
      fill: LetterFill,
    },
  },
];

export default navigation;
