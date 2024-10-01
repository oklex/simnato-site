import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { PALETTE } from "../theme";

type MODES = "light" | "dark" | "gold" | "blue";

type StyledTextProps = {
  children: ReactNode;
  mode?: MODES;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  highlight?: boolean;
};

// Styled component for the <span>
const StyledSpan = styled.span<{
  mode?: MODES;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  highlight?: boolean;
}>`
  ${(props) =>
    props.mode &&
    `
    color: ${(() => {
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
    })()};
  `}
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  background-color: ${(props) => (props.highlight ? "yellow" : "transparent")};
`;

export const StyledText: FC<StyledTextProps> = ({
  children,
  mode,
  bold,
  italic,
  underline,
  highlight,
}) => {
  return (
    <StyledSpan
      mode={mode}
      bold={bold}
      italic={italic}
      underline={underline}
      highlight={highlight}
    >
      {children}
    </StyledSpan>
  );
};
