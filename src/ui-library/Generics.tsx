import styled, { css } from "styled-components";
import { BREAKPOINTS, BREAKPOINTS as breakpoints } from "../theme";

/**
 * These component exist as quality of life component.
 * It does not support complex uses such as:
 * - re-styling responsiveness
 * - specific color palettes
 */

// to-add: Row, some 3 column grid, etc.

type GenericDivProps = {
  id?: string;
  className?: string;
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;

  flex?: boolean;
  flexDirection?: "row" | "col";
  flexWrap?: boolean;
  gap?: string;
  relative?: boolean;

  justifyContent?: "center" | "start" | "end" | "between" | "around" | "evenly";
  alignItems?: "stretch" | "normal" | "center" | "end" | string;

  responsiveness?: ResponsivenessOptions;
};
type ResponsivenessOptions =
  | "mobile-only"
  | "tablet-only"
  | "desktop-above"
  | "desktop-only"
  | "large-desktop-only"
  | "desktop-hide"
  | "mobile-hide";

export const Div = styled.div.attrs<GenericDivProps>(({ id, className }) => ({
  id,
  className,
}))<GenericDivProps>`
  padding: ${({ padding }) => (padding ? padding : "0px")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  height: ${({ height }) => height ?? "auto"};
  width: ${({ width }) => width ?? "auto"};

  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ relative }) => relative && `position: relative;`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: wrap;`}

  ${({ flex, flexDirection, gap }) =>
    flex
      ? css`
          display: flex;
          flex-direction: ${flexDirection === "col" ? "column" : "row"};
          ${gap ? `gap: ${gap};` : null}
        `
      : null}
  ${({ flex, justifyContent }) => {
    if (!flex || !justifyContent) return null;
    if (
      justifyContent === "center" ||
      justifyContent === "start" ||
      justifyContent === "end"
    )
      return css`
        justify-content: ${justifyContent};
      `;

    if (
      justifyContent === "between" ||
      justifyContent === "around" ||
      justifyContent === "evenly"
    )
      return css`
        justify-content: space-${justifyContent};
      `;
  }}
    ${({ responsiveness }) => {
    if (!responsiveness) return null;
    if (responsiveness === "mobile-only")
      return css`
        @media (min-width: ${breakpoints.sm}) {
          display: none !important;
        }
      `;
    if (responsiveness === "tablet-only")
      return css`
        @media (max-width: ${breakpoints.sm}) {
          display: none !important;
        }
        @media (min-width: ${breakpoints.desktop}) {
          display: none !important;
        }
      `;
    if (responsiveness === "desktop-above")
      return css`
        @media (max-width: ${breakpoints.desktop}) {
          display: none !important;
        }
      `;
    if (responsiveness === "desktop-only")
      return css`
        @media (max-width: ${breakpoints.desktop}) {
          display: none !important;
        }
        @media (min-width: ${breakpoints.desktopLg}) {
          display: none !important;
        }
      `;
    if (responsiveness === "large-desktop-only")
      return css`
        @media (max-width: ${breakpoints.desktopLg}) {
          display: none !important;
        }
      `;

    if (responsiveness === "mobile-hide")
      return css`
        @media (max-width: ${breakpoints.sm}) {
          display: none !important;
        }
      `;
    if (responsiveness === "desktop-hide")
      return css`
        @media (min-width: ${breakpoints.desktop}) {
          display: none !important;
        }
      `;
    return null;
  }};
`;

export const GridSection = styled.div<{ columns: number; gap?: string }>`
  display: grid;
  grid-gap: ${({ gap }) => gap ?? "16px"};

  @media (max-width: ${BREAKPOINTS.sm}) {
    grid-template-columns: 1fr;
    & > * {
      width: 100%;
    }
  }

  @media (min-width: ${BREAKPOINTS.sm}) and (max-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(2, 1fr);
    & > * {
		width: 100%;
    }
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(
      ${({ columns }) => (columns > 2 ? columns : 2)},
      1fr
    );
  }
`;
