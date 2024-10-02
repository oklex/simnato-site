import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { FONT_SIZES, FontSizeType, PALETTE } from "../theme";

type MODES = "light" | "dark" | "gold" | "blue";

export type StyledTextProps = {
  children: ReactNode;
  mode?: MODES;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  highlight?: boolean;
  uppercase?: boolean;
  spaced?: boolean;
  subtle?: boolean; // New subtle prop
  size?: FontSizeType
  horizontalPadding?: string;
};

// Styled component for the <span>
const StyledSpan = styled.span<{
  mode?: MODES;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  highlight?: boolean;
  uppercase?: boolean;
  spaced?: boolean;
  subtle?: boolean;
  size?: FontSizeType
  horizontalPadding?: string;
}>`
${({ size }) => {
  if (!size) return '';
  return css`
    font-size: ${FONT_SIZES[size]};
  `;
}};

  ${(props) =>
    props.mode &&
    `color: ${(() => {
      switch (props.mode) {
        case "light":
          return PALETTE.mono.near_white;
        case "dark":
          return PALETTE.blue.dark;
        case "gold":
          return PALETTE.gold.main;
        case "blue":
          return PALETTE.blue.main;
        default:
          return PALETTE.mono.main;
      }
    })()};`}

  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  background-color: ${(props) => (props.highlight ? "yellow" : "transparent")};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  ${({ spaced }) =>
    spaced &&
    css`
      letter-spacing: 0.3em;
    `}
  ${({ subtle }) =>
    subtle &&
    css`
      opacity: 0.8;
    `}

  ${({ horizontalPadding }) =>
    horizontalPadding &&
    css`
      padding-left: ${horizontalPadding};
      padding-right: ${horizontalPadding};
    `}
`;

export const StyledText: FC<StyledTextProps> = ({ children, ...rest }) => {
  return <StyledSpan {...rest}>{children}</StyledSpan>;
};