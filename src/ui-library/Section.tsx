import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { MODES, PALETTE, GRADIENTS } from "../theme";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  height?: string;
  maxHeight?: string;
  mode?: MODES;
  gradient?: "vertical" | "horizontal" | number | undefined; // Accepts number as degree
  center?: boolean;
};

const FullWidthSection = styled.section<Omit<SectionProps, "children">>`
  ${({ height }) =>
    height &&
    css`
      min-height: ${height};
    `}
  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight};
    `}
	background-color: ${(props) => {
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
  }};

  ${(props) =>
    props.gradient &&
    `
    background: linear-gradient(
      ${
        typeof props.gradient === "number"
          ? `${props.gradient}deg`
          : props.gradient === "vertical"
          ? "to bottom"
          : "to right"
      },
      ${
        props.mode === "light"
          ? GRADIENTS.light
          : props.mode === "dark"
          ? GRADIENTS.main
          : props.mode === "gold"
          ? GRADIENTS.near_white
          : GRADIENTS.main
      }
    );
  `}
`;

export const Section: FC<SectionProps> = ({
  children,
  mode = "light",
  gradient = undefined,
  height = "auto",
  maxHeight = undefined,
  center = false,
}) => {
  return (
    <FullWidthSection
      id="section"
      mode={mode}
      gradient={gradient}
      height={height}
      maxHeight={maxHeight}
    >
      <Container center={center}>{children}</Container>
    </FullWidthSection>
  );
};