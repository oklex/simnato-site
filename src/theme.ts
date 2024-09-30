type ColorGroupType = {
	dark: string;
	main: string;
	light: string;
	near_white: string;
};
export const COLORS: Record<string, ColorGroupType> = {
	blue: {
		dark: '#0B1957',
		main: '#28317F',
		light: '#B4BFEF',
		near_white: '#E2E7FD',
	},
	gold: {
		dark: '#9F7622',
		main: '#D4C5A6',
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
