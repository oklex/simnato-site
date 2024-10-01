import React from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { MODES, PALETTE } from "../theme";

type TextProps = {
  children: ReactNode;
  mode?: MODES;
  size?: "sm" | "md" | "lg";
  margin?: string;
  bold?: boolean;
  italic?: boolean;
  align?: "left" | "center" | "right";
  center?: boolean;
};

// Styled component for dynamic text
const StyledText = styled.p<{
  mode: MODES;
  size: "sm" | "md" | "lg";
  margin?: string;
  bold: boolean;
  italic: boolean;
  center: boolean;
}>`
  font-family: "Plus Jakarta Sans", sans-serif !important;
  color: ${(props) => {
    switch (props.mode) {
      case "light":
        return "#F1F1F1"; // Light text with specific hex
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

  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "0.875rem"; // Small size
      case "md":
        return "1.2rem"; // Medium size (default)
      case "lg":
        return "1.8rem"; // Large size
      default:
        return "1rem"; // Fallback to medium size
    }
  }};

  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  text-align: ${(props) => (props.center ? "center" : "left")};
  margin: ${(props) =>
    props.margin || "0"}; // Apply margin if provided, otherwise no margin
`;

export const Text: FC<TextProps> = ({
  children,
  mode = "dark",
  size = "md",
  margin = "0",
  bold = false,
  italic = false,
  center = false,
}) => {
  return (
    <StyledText
      mode={mode}
      size={size}
      margin={margin}
      bold={bold}
      italic={italic}
      center={center}
    >
      {children}
    </StyledText>
  );
};
