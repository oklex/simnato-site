import { useState, useEffect } from "react";

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
    if (typeof window === "undefined") return;

    const calculateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setScreenSize({
        width,
        height,
        isMobile: width <= MOBILE_BREAKPOINT,
        isTablet: width > MOBILE_BREAKPOINT && width <= TABLET_BREAKPOINT,
      });
    };

    // Initial size calculation
    calculateScreenSize();

    window.addEventListener("resize", calculateScreenSize);
    return () => {
      window.removeEventListener("resize", calculateScreenSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
