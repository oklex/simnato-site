import { createContext, Ref, useEffect, useRef } from "react";
import { useRouter } from "next/router";

interface NavTheme {
  theme: "light" | "dark";
  initializeRef: (key: string, ref: Ref<HTMLDivElement>) => void;
  refreshPosition: () => void;
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
  refreshPosition: () => {},
};

const NavThemeContext = createContext<NavTheme>(defaultNavTheme);

import { useState } from "react";

const NavThemeProvider = ({ children }) => {
  const router = useRouter(); // Use Next.js router

  const [theme, setTheme] = useState<ThemeType>("light");
  const [sectionsPosition, setSectionsPosition] =
    useState<SectionsPositionType>({});
  const refsDirectory = useRef<Record<string, Ref<HTMLDivElement>>>({});

  useEffect(() => {
    const handleRouteChange = () => {
      setSectionsPosition({});
      refsDirectory.current = {};
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarHeight = 50; // Example navbar height in pixels
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
      if (newTheme !== theme) setTheme(newTheme);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionsPosition]);

  const calculate = (keys?: string[]) => {
    const refKeys = keys ?? Object.keys(refsDirectory.current);
    const positions: SectionsPositionType = { ...sectionsPosition };

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
  };

  const initializeRef = (key: string, ref: Ref<HTMLDivElement>) => {
    refsDirectory.current[key] = ref;
    calculate([key]);
  };

  const refreshPosition = () => {
    calculate();
  };

  return (
    <NavThemeContext.Provider value={{ theme, initializeRef, refreshPosition }}>
      {children}
    </NavThemeContext.Provider>
  );
};

export { NavThemeContext, NavThemeProvider };
