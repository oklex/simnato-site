import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { FONT_SIZES, FontSizeType, MODES, PALETTE } from "../theme";

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
  size?: FontSizeType;
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
  size?: FontSizeType;
  horizontalPadding?: string;
}>`
  ${({ size }) => {
    if (!size) return "";
    return css`
      font-size: ${FONT_SIZES[size]};
    `;
  }};
  ${({ mode }) => {
    switch (mode) {
      case "light":
        return css`
          color: ${PALETTE.mono.near_white};
        `; // White text
      case "dark":
        return css`
          color: ${PALETTE.mono.dark};
        `; // Dark blue text
      case "silver":
        return css`
          color: ${PALETTE.silver.main};
        `;
      case "gold":
        return css`
          background: linear-gradient(
            0deg,
            #9f7622 0%,
            #d4c5a6 36%,
            #f2ebdd 50%,
            #d4c5a6 64%,
            #9f7622 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `; // Gold text
      case "blue":
        return css`
          color: ${PALETTE.blue.main};
        `; // Blue text
      default:
        return "";
    }
  }};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `};
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
