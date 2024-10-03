import React, { ReactElement } from "react";
import styled from "styled-components";
import GoldBrandLogo from "../assets/goldLogo";
import { Header, Spacer, Text, Section } from "../ui-library";
import { RegistrationNav } from "./RegistrationNav";
import { PALETTE } from "../theme";
import { RegistrationInfoSlice } from "./registrationInfoSlice";
import useScreenSize from "../stores/useScreenSize";

export const HomepageHero = (): ReactElement => {
  // const { width, height, isMobile } = useScreenSize();
  // need to add mobile prop variations, and components

  return (
    <div id="homepage-hero" style={{ position: "relative" }}>
      <CornerLabel>
        <Text>EST. 2024</Text>
      </CornerLabel>
      <Section center height="calc(100vh - 25px)" mode="dark" gradient={360}>
        <Spacer height={"18vh"} />
        <GoldBrandLogo scale="16rem" center padding="25px 25px 15px" />
        <Header level={1} sizeRemOverride={5.5} mode="gold" center bold>
          Simulation NATO
        </Header>
        <Header
          margin="-10px 0 auto"
          level={6}
          sizeRemOverride={2}
          mode="light"
          center
        >
          Model UN Crisis Conference
        </Header>
        <Text subtle align="center">
          Jan 24 - 26 | Richmond, BC
        </Text>
        <Spacer height={"5vh"} />
        <RegistrationInfo>
          <RegistrationInfoSlice />
        </RegistrationInfo>
      </Section>
    </div>
  );
};

const CornerLabel = styled.div`
  position: absolute;
  top: 45px;
  left: 45px;

  & > * {
    color: ${PALETTE.blue.light};
    letter-spacing: 1em;
    font-size: 0.6rem;
  }
`;

const RegistrationInfo = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 700px;
`;
