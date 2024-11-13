import { useState, useEffect } from 'react';

interface ScrollPosition {
	scrollX: number;
	scrollY: number;
}

export const useScrollPosition = (): ScrollPosition => {
	const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
		scrollX: 0,
		scrollY: 0,
	});

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition({
				scrollX: window.scrollX,
				scrollY: window.scrollY,
			});
		};

		// Set initial scroll position
		handleScroll();

		// Add event listener
		window.addEventListener('scroll', handleScroll);

		// Cleanup event listener on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
};
