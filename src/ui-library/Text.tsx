import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { StyledText, StyledTextProps } from "./StyledText"; // Import the existing StyledText
import { FONT_SIZES, FontSizeType } from "../theme";

export type TextProps = StyledTextProps & {
  size?: FontSizeType
  margin?: string;
  align?: "left" | "center" | "right";
};

// Wrapper component for layout-specific props like size, margin, align
const TextComponent = styled.div<TextProps>`
  font-family: "Plus Jakarta Sans", sans-serif !important;
  ${({ size }) => {
  return css`
    font-size: ${FONT_SIZES[size ?? 'md']};
  `;
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