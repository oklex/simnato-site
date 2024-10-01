import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { StyledText, StyledTextProps } from "./StyledText"; // Import the existing StyledText

type TextProps = StyledTextProps & {
  size?: "sm" | "md" | "lg";
  margin?: string;
  align?: "left" | "center" | "right";
};

// Wrapper component for layout-specific props like size, margin, align
const TextComponent = styled.div<TextProps>`
  font-family: "Plus Jakarta Sans", sans-serif !important;

  font-size: ${({ size }) => {
    switch (size) {
      case "sm":
        return "0.875rem";
      case "md":
        return "1.2rem";
      case "lg":
        return "1.8rem";
      default:
        return "1rem"; // Default size
    }
  }};

  ${({ align }) =>
    align &&
    `
    text-align: ${align};
  `}

  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
  `}
`;

export const Text: FC<TextProps> = ({
  children,
  size = "md",
  margin = "0",
  align = "left",
  ...rest
}) => {
  return (
    <TextComponent size={size} margin={margin} align={align}>
      <StyledText {...rest}>{children}</StyledText>
    </TextComponent>
  );
};
