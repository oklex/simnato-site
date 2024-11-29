import { useState, useEffect } from "react";

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
    // Skip execution during SSR
    if (typeof window === "undefined") return;
    let ticking = false; // Flag to throttle updates

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition({
            scrollX: window.scrollX,
            scrollY: window.scrollY,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};
