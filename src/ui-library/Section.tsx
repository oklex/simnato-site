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

export const Section: FC<SectionProps> = ({
  children,
  mode = "light",
  gradient = undefined,
  height = "auto",
  maxHeight = undefined,
  center = false,
}) => {
  return (
    <OutterWrapper>
      <FullWidthSection
        id="section"
        gradient={gradient}
        height={height}
        maxHeight={maxHeight}
      >
        {children}
      </FullWidthSection>
    </OutterWrapper>
  );
};

const OutterWrapper = styled.div`
  padding: 0.5rem;
`;

const FullWidthSection = styled.section<Omit<SectionProps, "children">>`
  border-radius: 20px;
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
