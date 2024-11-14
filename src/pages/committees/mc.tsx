import { ReactElement } from "react";
import styled from "styled-components";

import { ViewPortSection } from "@components/ViewPortSection";
import {
  Container,
  Div,
  Header,
  NarrowContainer,
  Spacer,
  StyledText,
  Text,
} from "@ui-library";
import { Portrait } from "@components/Portrait";
import { BREAKPOINTS } from "@src/theme";
import StarMarker from "@assets/starMarkers";

export const MCpage = (): ReactElement => {
  return (
    <div>
      <NarrowContainer>
        <Spacer height={"15vh"} />
        <Div flex justifyContent="center">
          <StarMarker type="dark" />
        </Div>
        <Header center level={1} mode="dark">
          Military Committee
        </Header>
        <Spacer />
      </NarrowContainer>
      <Spacer />
      <Letter>
        <Header level={5} mode="dark" center>
          <StyledText bold>-- URGENT READ IMMEDIATELY --</StyledText>
        </Header>
        <Spacer />
        <Spacer />
        <Text mode="dark">To all NATO Military Commanders: </Text>
        <Text mode="dark">
          Ukraine must not fall into Russian hands. It will be the fracture that
          will split NATO apart, we must unite as one and curb Putin’s
          aggression once and for all. We have prepared a simulation for you
          this March, we expect your undivided attention and presence. This will
          determine the future of this council, and its ability to stop other
          countries’ aggressive behaviour. Failure to do so puts the council,
          and the global community, in a devastating position. The fall of
          Ukraine will be the first of many in our various partners around the
          world, it must not happen at any costs. We hope that we chose the
          right individuals for this job, the world is counting on us.
        </Text>
        <Text mode="dark">Godspeed. </Text>

        <Div
          flex
          flexDirection="row"
          justifyContent="center"
          gap="15px"
          padding="10px"
        >
          <Portrait
            fullName="Marek Cai"
            position="Co-Director"
            width="medium"
          />
          <Portrait fullName="Mary Lu" position="Co-Director" width="medium" />
        </Div>
      </Letter>
    </div>
  );
};

export default MCpage;

const LetterGrid = styled.div`
  display: grid;
  grid-gap: 16px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${BREAKPOINTS.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Letter = styled(NarrowContainer)`
  grid-column: span 2;
  max-width: 720px;
`;
