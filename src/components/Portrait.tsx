import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

import { Header, Text, StyledText, Div } from "@ui-library";
import { COLORS, GRADIENTS, PALETTE } from "@src/theme";
import { popOut, popIn } from "@src/keyframeAnimations";
import useScreenSize from "@src/stores/useScreenSize";

type PortraitProps = {
  fullName?: string;
  position?: string;
  subtitle?: string;
  width?: number | "medium" | "full";
  link?: string;
  mode?: "light" | "dark";
};

export const Portrait = ({
  fullName,
  position,
  subtitle,
  link,
  width = "full",
  mode = "dark",
}: PortraitProps): JSX.Element => {
  const { isMobile } = useScreenSize();
  const clickable = !!link;
  const rootSize = { width: 568, height: 777 };
  const widthValue =
    width === "full"
      ? rootSize.width
      : width === "medium"
      ? 175 - (isMobile ? 35 : 0)
      : width;
  const heightValue = (() => widthValue * (rootSize.height / rootSize.width))();

  const portraitPath = `/portraits/${fullName.split(" ").join("_")}.png`;

  const showPortraitImage = () => {
    if (fullName === "placeholder")
      return (
        <Image
          src="/portraits/placeholder.png"
          alt="placeholder portrait"
          quality={100}
          style={{
            objectFit: "contain",
            borderRadius: "12px",
            backgroundColor: COLORS.globalBackgroundColor,
          }}
          width={widthValue}
          height={heightValue}
        />
      );

    return (
      <Image
        src={portraitPath}
        alt={`${fullName} Secretariat portrait`}
        quality={100}
        style={{
          objectFit: "contain",
          borderRadius: "12px",
          backgroundColor: COLORS.globalBackgroundColor,
          filter: "grayscale(90%)", // Apply grayscale by default
          transition: "filter 0.5s ease", // Smooth transition to color
        }}
        width={widthValue}
        height={heightValue}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "none")} // Remove grayscale on hover
        onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(90%)")} // Reapply grayscale when not hovering
      />
    );
  };

  const render = () => (
    <PortraitContainer clickable={clickable}>
      <Div flex justifyContent="center">
        <PortraitWrapper clickable={clickable}>
          {showPortraitImage()}
        </PortraitWrapper>
      </Div>
      <Div>
        {fullName && (
          <Header center level={5} mode={mode}>
            {fullName}
          </Header>
        )}
        {position && (
          <Text align="center" mode={mode}>
            <StyledText subtle>{position}</StyledText>
          </Text>
        )}
        {subtitle && (
          <Div flex justifyContent="center">
            <Text align="center" mode={mode}>
              <StyledText size="sm" subtle>
                {subtitle}
              </StyledText>
            </Text>
          </Div>
        )}
      </Div>
    </PortraitContainer>
  );

  return link ? <Link href={link}>{render()}</Link> : render();
};

type PortraitStylingProps = {
  clickable?: boolean;
};
const PortraitContainer = styled.div<PortraitStylingProps>`
  ${({ clickable }) => clickable && `cursor: pointer;`}
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const PortraitWrapper = styled.div<{ clickable: boolean }>`
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  /* Add the blue overlay */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(5, 0, 78, 0.3); /* Light blue overlay */
    mix-blend-mode: color;
    pointer-events: none;
    transition: opacity 0.5s ease;
  }

  /* Hover to remove grayscale and blue tint */
  &:hover img {
    filter: none;
  }

  /* Hover to remove the blue overlay */
  &:hover::after {
    opacity: 0;
  }

  ${({ clickable }) =>
    clickable &&
    css`
      animation: ${popOut} 0.2s forwards;

      &:hover {
        animation: ${popIn} 0.2s forwards;
        background: ${`-webkit-linear-gradient(
                    135deg,
                    ${GRADIENTS.main}
                )`};
      }
    `}
`;
