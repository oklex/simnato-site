import { useState, useEffect } from 'react';

// Define breakpoints
const MOBILE_BREAKPOINT = 600;
const TABLET_BREAKPOINT = 1024;

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState({
		width: 0,
		height: 0,
		isMobile: false,
		isTablet: false,
	});

	useEffect(() => {
		// Ensure window is available
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
				isMobile: window.innerWidth <= MOBILE_BREAKPOINT,
				isTablet: window.innerWidth <= TABLET_BREAKPOINT,
			});
		};

		handleResize(); // Set the initial size
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return screenSize;
};

export default useScreenSize;
