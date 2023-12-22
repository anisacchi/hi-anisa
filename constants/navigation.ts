import { Envelope, EnvelopeFill, House, Laptop, LaptopFill, User, UserFill } from '@/assets/icons';
import HouseFill from '@/assets/icons/HouseFill';

const navigation = [
	{
		id: 'home',
		name_en: 'Home',
		name_id: 'Beranda',
		link: '/',
		icon: {
			regular: House,
			fill: HouseFill,
		},
	},
	{
		id: 'about',
		name_en: 'About',
		name_id: 'Tentang',
		link: '/about',
		icon: {
			regular: User,
			fill: UserFill,
		},
	},
	{
		id: 'projects',
		name_en: 'Projects',
		name_id: 'Proyek',
		link: '/projects',
		icon: {
			regular: Laptop,
			fill: LaptopFill,
		},
	},
	{
		id: 'contact',
		name_en: 'Contact',
		name_id: 'Kontak',
		link: '/contact',
		icon: {
			regular: Envelope,
			fill: EnvelopeFill,
		},
	},
];

export default navigation;
