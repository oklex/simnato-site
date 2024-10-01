/* eslint-disable no-undef */
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { PALETTE, MODES } from "../theme";

type HeaderProps = {
  children: ReactNode;
  mode?: MODES;
  level?: number;
  sizeRemOverride?: number;
  bold?: boolean;
  align?: "left" | "center" | "right";
  center?: boolean;
  margin?: string;
  uppercase?: boolean;
};

// Utility function to determine the heading level (h1, h2, etc.)
const getHeadingTag = (level: number): keyof JSX.IntrinsicElements =>
  `h${level}` as keyof JSX.IntrinsicElements;

// Styled component for dynamic heading
const StyledHeader = styled.div<{
  mode: MODES;
  sizeRemOverride?: number;
  bold: boolean;
  center: boolean;
  level: number;
  margin?: string;
  uppercase?: boolean;
}>`
  font-family: "Philosopher";
  color: ${(props) => {
    switch (props.mode) {
      case "light":
        return PALETTE.mono.near_white; // White text
      case "dark":
        return PALETTE.blue.dark; // Dark blue text
      case "gold":
        return PALETTE.gold.main; // Gold text
      case "blue":
        return PALETTE.blue.main; // Blue text
      default:
        return PALETTE.mono.main; // Default color
    }
  }};

  // Calculate font size and line-height based on level, with optional override
  font-size: ${(props) => {
    const baseFontSize = (() => {
      switch (props.level) {
        case 1:
          return 3; // e.g., h1 = 3rem
        case 2:
          return 2.5; // e.g., h2 = 2.5rem
        case 3:
          return 2; // e.g., h3 = 2rem
        case 4:
          return 1.75; // e.g., h4 = 1.75rem
        case 5:
          return 1.5; // e.g., h5 = 1.5rem
        case 6:
          return 1.25; // e.g., h6 = 1.25rem
        default:
          return 1; // Default size
      }
    })();

    return props.sizeRemOverride
      ? `${props.sizeRemOverride}rem`
      : `${baseFontSize}rem`;
  }};

  // Set line-height to match the font size
  line-height: ${(props) => {
    const baseFontSize = (() => {
      switch (props.level) {
        case 1:
          return 3;
        case 2:
          return 2.5;
        case 3:
          return 2;
        case 4:
          return 1.75;
        case 5:
          return 1.5;
        case 6:
          return 1.25;
        default:
          return 1;
      }
    })();
    return props.sizeRemOverride
      ? `${props.sizeRemOverride * 1.2}rem` // 1.2 multiplier for line-height
      : `${baseFontSize * 1.2}rem`; // Default line-height based on font size
  }};

  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  text-align: ${(props) => (props.center ? "center" : "left")};
  margin: ${(props) => props.margin || "0"};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

export const Header: FC<HeaderProps> = ({
  children,
  mode = "light",
  level = 1,
  sizeRemOverride,
  bold = false,
  center = false,
  margin = "0",
  uppercase,
}) => {
  const HeadingTag = getHeadingTag(level); // Determine the heading tag (h1, h2, etc.)

  return (
    <StyledHeader
      as={HeadingTag}
      mode={mode}
      sizeRemOverride={sizeRemOverride}
      bold={bold}
      center={center}
      level={level}
      margin={margin}
      uppercase={uppercase}
    >
      {children}
    </StyledHeader>
  );
};
