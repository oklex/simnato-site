import { createContext, Ref, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

interface NavTheme {
	theme: 'light' | 'dark';
	initializeRef: (key: string, ref: Ref<HTMLDivElement>) => void;
}
type ThemeType = Pick<NavTheme, 'theme'>['theme'];
type SectionsPositionType = Record<
	string,
	{
		top: number;
		bottom: number;
	}
>;

const defaultNavTheme: NavTheme = {
	theme: 'light',
	initializeRef: () => {},
};

const NavThemeContext = createContext<NavTheme>(defaultNavTheme);

import { useState } from 'react';

const NavThemeProvider = ({ children }) => {
	const router = useRouter(); // Use Next.js router

	const [theme, setTheme] = useState<ThemeType>('light');
	const themeRef = useRef('light');
	const refsDirectory = useRef<Record<string, Ref<HTMLDivElement>>>({});

	useEffect(() => {
		const handleRouteChange = () => {
			refsDirectory.current = {};
		};

		router.events.on('routeChangeStart', handleRouteChange);
		return () => router.events.off('routeChangeStart', handleRouteChange);
	}, [router]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const navbarHeight = 50; // Example navbar height in pixels
			const sectionsPosition = calculate();
			let newTheme: ThemeType = 'light';

			for (const [key, position] of Object.entries(sectionsPosition)) {
				if (
					scrollY + navbarHeight >= position.top &&
					scrollY + navbarHeight < position.bottom
				) {
					newTheme = 'dark';
					break;
				}
			}
			if (newTheme !== themeRef.current) {
				setTheme(newTheme);
				themeRef.current = newTheme;
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const calculate = (): SectionsPositionType => {
		const refKeys = Object.keys(refsDirectory.current);
		const positions: SectionsPositionType = {};

		refKeys.forEach((key) => {
			const ref = refsDirectory.current[
				key
			] as React.MutableRefObject<HTMLDivElement | null>;
			if (ref && ref.current) {
				const element = ref.current;
				const topPosition =
					element.getBoundingClientRect().top + window.scrollY;
				const bottomPosition = topPosition + element.offsetHeight;
				positions[key] = {
					top: topPosition,
					bottom: bottomPosition,
				};
			}
		});
		return positions;
	};

	const initializeRef = (key: string, ref: Ref<HTMLDivElement>) => {
		refsDirectory.current[key] = ref;
	};

	return (
		<NavThemeContext.Provider value={{ theme, initializeRef }}>
			{children}
		</NavThemeContext.Provider>
	);
};

export { NavThemeContext, NavThemeProvider };
