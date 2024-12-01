import { ReactElement } from "react";
import styled from "styled-components";

import { ViewPortSection } from "@components/ViewPortSection";
import {
  Container,
  Div,
  GridSection,
  Header,
  NarrowContainer,
  Spacer,
  StyledText,
  Text,
} from "@ui-library";
import { Portrait } from "@components/Portrait";
import { BREAKPOINTS } from "@src/theme";
import StarMarker from "@assets/starMarkers";
import { CommitteeStatsTypes, StatsChart } from "@components/StatsChart";
import { Banner } from "@components/Banner";
import Footer from "@src/components/Footer";

const COMMITTEE_STATS: CommitteeStatsTypes = {
  knowledge: 4,
  speeches: 4,
  pacing: 3,
  moderation: 3,
};

export const NACpage = (): ReactElement => {
  return (
    <div>
      <NarrowContainer>
        <Spacer height={"15vh"} />
        <Div flex justifyContent="center">
          <StarMarker type="gold" />
        </Div>
        <Header center level={1} mode="dark">
          North Atlantic Council
        </Header>
        <Spacer />
      </NarrowContainer>
      <Spacer />
      <NarrowContainer>
        <LetterGrid>
          <Letter>
            <Text mode="dark">To my dearest delegates,</Text>
            <Spacer />
            <Text mode="dark">
              Before introducing myself, I would like to congratulate all the
              delegates who chose to challenge the new concept of SimNATO and
              tackle it through the committee known as the North Atlantic
              Council (NAC). NAC will be a fast-paced crisis committee that is
              responsible for being the brains of every action that will be
              carried out by the other SimNATO committees. Although it may seem
              daunting, I can assure you that NAC is a platform for all
              delegates to experience what it means to be a NATO ambassador. No
              matter if you are an experienced or beginner delegate, you have
              the power to change the world and the course of modern history. So
              please, do not hesitate to take that first step and take the time
              to experience the NAC committee.
            </Text>
            <Text mode="dark">
              Now, introductions— My name is Rachel Yu, and I am pleased to
              serve as your NAC director for SimNATO 2025. I too was once a
              timid delegate in the vast seas of moderated caucuses and speedy
              resolution papers. Although MUN began as a hobby, I would have
              never imagined the long-lasting friendships and priceless
              experiences I would gain despite the different backgrounds of my
              peers. Truly, MUN is a place for delegates to learn, speak, and
              meet new individuals.
            </Text>
            <Text mode="dark">
              So please, don’t hesitate to take that first daunting step into
              SimNATO. And in the words of Unknown, “Explore. Dream. Discover.”
            </Text>
            <Text mode="dark">
              If there are any questions, please don’t hesitate to contact me at
              ___
            </Text>

            <Text mode="dark">
              With best regards,
              <br />
              Rachel Yu
              <br />
              Director of the North Atlantic Council
              <br />
              SimNATO
              <br />
            </Text>
          </Letter>

          <Div flex flexDirection="col" gap="15px" padding="10px">
            <Portrait fullName="Rachel Yu" position="Director" width="medium" />
          </Div>
        </LetterGrid>
      </NarrowContainer>
      <Spacer />
      <Container>
        <ViewPortSection id="committee-info">
          <Spacer />
          <GridSection columns={2} gap="15px" preferSingleOnMedium>
            <Div padding="25px">
              <Header level={6}>About</Header>
              <Header level={3}>North Atlantic Council</Header>
              <Spacer />
              <Spacer />
              <Text>
                <StyledText subtle>
                  Imagine: you can change the world's fate with a single vote, a
                  single signature, or a single speech. <br />
                  <br /> Welcome to the North Atlantic Council (NAC) where every
                  NATO country's military, economic, and political might is
                  controlled. At its core, NAC is a committee that allows
                  delegates to experience the power of controlling and pulling
                  the strings on certain political events. However, being an
                  ambassador is no easy feat; NAC is a fast-paced committee that
                  will be the medium between the other SimNATO committees.
                  Without a doubt, NAC will be a surprising, exhilarating, and
                  thrilling committee that hopes to simulate what it means to be
                  a NATO ambassador truly.
                </StyledText>
              </Text>
							<Spacer />
							<Text>
								<StyledText bold> Position Paper format:</StyledText> TBA
								<br/>
								<StyledText bold> Position Paper deadline:</StyledText> TBA
							</Text>
            </Div>
            <Div padding="15px 0px 0px">
              <StatsChart committeeStats={COMMITTEE_STATS} />
            </Div>
          </GridSection>
          <Spacer />
        </ViewPortSection>
        <Banner type="notice">Topic Research coming soon</Banner>
      </Container>
			<Footer />
    </div>
  );
};

export default NACpage;

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

const Letter = styled.div`
  grid-column: span 2;
`;
