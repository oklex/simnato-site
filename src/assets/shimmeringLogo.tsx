import React, { FC, ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";
import SilverBrandLogo from "./silverLogo";
import GoldBrandLogo from "./goldLogo";

interface ResizableSVGProps {
  scale: string | number;
  center?: boolean;
  padding?: string;
}
interface ShimmeringLogoProps extends ResizableSVGProps {
  duration?: number;
  gap?: number;
}

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const OverlayContainer = styled.div<ResizableSVGProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ scale }) => scale};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

const OverlayItem = styled.div<{ fade?: boolean; duration?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ fade, duration }) =>
    fade &&
    css`
      animation: ${fadeOut} ${duration}s ease forwards;
    `}
`;

export const ShimmeringLogo: FC<ShimmeringLogoProps> = ({
  duration = 2,
  gap = 4,
  ...props
}) => {
  return (
    <OverlayContainer {...props}>
      <OverlayItem>
        <SilverBrandLogo {...props} />
      </OverlayItem>
      <OverlayItem fade={true} duration={duration}>
        <GoldBrandLogo {...props} />
      </OverlayItem>
    </OverlayContainer>
  );
};

export default ShimmeringLogo;
