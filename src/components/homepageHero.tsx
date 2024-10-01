import React, { ReactElement } from "react";
import GoldBrandLogo from "../assets/goldLogo";
import { Header, Spacer, Text, Section } from "../ui-library";
import { RegistrationNav } from "./RegistrationNav";
import styled from "styled-components";
import { PALETTE } from "../theme";

export const HomepageHero = (): ReactElement => {
  return (
    <div id="homepage-hero" style={{ position: "relative" }}>
      <CornerLabel>
        <Text>EST. 2024</Text>
      </CornerLabel>
      <Section center height="90vh" mode="dark" gradient="vertical">
        <Spacer height={"30vh"} />
        <GoldBrandLogo scale="18rem" center padding="25px 25px 25px" />
        <Header level={1} sizeRemOverride={6.3} mode="gold" center bold>
          Simulation NATO
        </Header>
        <Header
          margin="-15px 0 auto"
          level={6}
          sizeRemOverride={2.3}
          mode="light"
          center
        >
          Model UN Crisis Conference
        </Header>
        <RegistrationNav />
      </Section>
    </div>
  );
};

const CornerLabel = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;

  & > * {
    color: ${PALETTE.blue.light};
    letter-spacing: 1.46em;
    font-size: 0.6rem;
  }
`;
