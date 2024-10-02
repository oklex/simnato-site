export type MODES = 'light' | 'dark' | 'gold' | 'blue';

type ColorGroupType = {
	dark: string;
	main: string;
	light: string;
	near_white: string;
};

export const GET_GRADIENTS = (degree: number = 0) => ({
	dark: `linear-gradient(${degree}deg, #030B2E 0%, #030B2E 70%, #0B1957 100%)`,
	main: `linear-gradient(${degree}deg, #28317F 0%, #0B1957 34%, #030B2E 100%)`,
});
export const GRADIENTS = {
	dark: '#030B2E 0%, #030B2E 69%, #0B1957 100%',
	main: '#28317F 0%, #0B1957 34%, #030B2E 100%',
	light: '#B4BFEF 0%, #E2E7FD 69%, #EEF0F5 100%',
	near_white: '#D4C5A6 0%, #F2EBDD 69%, #FFFFFF 100%',
};

export const PALETTE: Record<string, ColorGroupType> = {
	blue: {
		dark: '#0B1957',
		main: '#28317F',
		light: '#B4BFEF',
		near_white: '#E2E7FD',
	},
	gold: {
		dark: '#9F7622',
		main: '#B19967',
		light: '#D4C5A6',
		near_white: '#F2EBDD',
	},
	mono: {
		dark: '#030B2E',
		main: '#787C8A',
		light: '#EEF0F5',
		near_white: '#FFFFFF',
	},
};

export const COLORS: Record<string, string> = {
	baseText: '#787C8A',
	darkText: '#0B1957',
	lightText: '#F1F1F1',
};

export const FONT_SIZES = {
	xs: '0.6rem',
	sm: '0.85rem',
	md: '1rem',
	lg: '1.8rem',
  };
export type FontSizeType = keyof typeof FONT_SIZES