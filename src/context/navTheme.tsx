import { createContext, Ref, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

interface NavTheme {
  theme: "light" | "dark";
  initializeRef: (key: string, ref: Ref<HTMLDivElement>) => void;
}
type ThemeType = Pick<NavTheme, "theme">["theme"];
type SectionsPositionType = Record<
  string,
  {
    top: number;
    bottom: number;
  }
>;

const defaultNavTheme: NavTheme = {
  theme: "light",
  initializeRef: () => {},
};

const NavThemeContext = createContext<NavTheme>(defaultNavTheme);

const NavThemeProvider = ({ children }) => {
  const router = useRouter(); // Use Next.js router
  const [theme, setTheme] = useState<ThemeType>(router.pathname === '/' ? "dark" : "light"); // default expect dark on homepage
  const [isClient, setIsClient] = useState(false); // Ensure client-side rendering
  const themeRef = useRef("light");
  const refsDirectory = useRef<Record<string, Ref<HTMLDivElement>>>({});

  useEffect(() => {
    // Mark as client-side rendering
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Skip during SSR

    const handleRouteChange = () => {
      refsDirectory.current = {};
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarHeight = 70; // Example navbar height in pixels
      const sectionsPosition = calculate();
      let newTheme: ThemeType = "light";

      for (const [key, position] of Object.entries(sectionsPosition)) {
        if (
          scrollY + navbarHeight >= position.top &&
          scrollY + navbarHeight < position.bottom
        ) {
          newTheme = "dark";
          break;
        }
      }
      if (newTheme !== themeRef.current) {
        setTheme(newTheme);
        themeRef.current = newTheme;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    handleRouteChange();
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, isClient]);

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

  if (!isClient) {
    // Prevent mismatch during hydration
    return (
      <NavThemeContext.Provider value={defaultNavTheme}>
        {children}
      </NavThemeContext.Provider>
    );
  }

  return (
    <NavThemeContext.Provider
      value={{
        theme,
        initializeRef,
      }}
    >
      {children}
    </NavThemeContext.Provider>
  );
};

export { NavThemeContext, NavThemeProvider };
