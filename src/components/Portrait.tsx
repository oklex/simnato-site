import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

import { Header, Text, StyledText, Div } from "@ui-library";
import { COLORS, GRADIENTS } from "@src/theme";
import { popOut, popIn } from "@src/keyframeAnimations";

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
  const clickable = !!link;
  const rootSize = { width: 568, height: 777 };
  const widthValue =
    width === "full" ? rootSize.width : width === "medium" ? 175 : width;
  const heightValue = (() => widthValue * (rootSize.height / rootSize.width))();

  const portraitPath = `/portraits/${fullName.split(" ").join("_")}.png`;

  const showPortraitImage = () => {
    if (fullName === "placeholder" || fullName.includes("Caitlin"))
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
              <StyledText size='sm' subtle>{subtitle}</StyledText>
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
  /* padding: 0.2rem; */
  margin-left: auto;
  margin-right: auto;

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
