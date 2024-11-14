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
  GridSection,
} from "@ui-library";
import { Portrait } from "@components/Portrait";
import { BREAKPOINTS } from "@src/theme";
import StarMarker from "@assets/starMarkers";
import { CommitteeStatsTypes, StatsChart } from "@src/components/StatsChart";

const COMMITTEE_STATS: CommitteeStatsTypes = {
  knowledge: 5,
  speeches: 3,
  pacing: 4,
  moderation: 1,
};

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
        <Spacer height={"2rem"} />

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
      <Spacer />
      <Container>
        <ViewPortSection id="committee-info">
          <Spacer/>
          <GridSection columns={2} gap="15px">
            <Div padding="25px">
              <Header level={6}>About</Header>
              <Header level={3}>The Military Committee</Header>
              <Spacer />
              <Spacer />
              <Text>
                <StyledText subtle>
                  The NATO Military Committee, established in 1949, holds the
                  highest military authority in NATO, led by the Supreme Allied
                  Commanders of Operations and Transformation. It provides
                  critical recommendations to the North Atlantic Council (NAC)
                  on logistics and strategy. In this fast-paced SimNATO
                  committee, you'll represent one of the Chiefs of Defence,
                  navigating tactical decisions unique to this Model UN
                  experience. Complex and demanding, this committee requires
                  intense preparation and collaboration. Key questions include:
                  What are your country’s goals? What resources can it commit?
                  Can NATO’s strategy hold up under global strain? These
                  decisions are vital for the success of the committee and
                  global security.
                </StyledText>
              </Text>
            </Div>
            <Div padding="15px 0px 0px">
              <StatsChart committeeStats={COMMITTEE_STATS} />
            </Div>
          </GridSection>
        </ViewPortSection>
      </Container>
    </div>
  );
};

export default MCpage;

const Letter = styled(NarrowContainer)`
  max-width: 720px;
`;
