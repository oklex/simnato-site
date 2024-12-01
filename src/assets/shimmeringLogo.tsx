import React, { FC, useState } from "react";
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
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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
  height: ${({ scale }) => scale};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

const OverlayItem = styled.div<{
  fade?: boolean;
  isVisible: boolean;
  duration: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ fade, isVisible, duration }) => {
    if (!fade) return ``;
    return isVisible
      ? css`
          animation: ${fadeIn} ${duration}s ease forwards;
        `
      : css`
          animation: ${fadeOut} ${duration}s ease forwards;
        `;
  }}
`;

export const ShimmeringLogo: FC<ShimmeringLogoProps> = ({
  duration = 1,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [delayedState, setDelayedState] = useState(false);

  return (
    <OverlayContainer
      {...props}
      onMouseEnter={() => {
        setIsHovered(true);
        setDelayedState(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setTimeout(() => setDelayedState(false), duration * 1000); // Wait for fade-out to complete
      }}
    >
      <OverlayItem
        fade={false}
        isVisible={!isHovered && delayedState}
        duration={duration}
      >
        <SilverBrandLogo {...props} />
      </OverlayItem>
      <OverlayItem fade={true} isVisible={isHovered} duration={duration}>
        <GoldBrandLogo {...props} />
      </OverlayItem>
    </OverlayContainer>
  );
};

export default ShimmeringLogo;
