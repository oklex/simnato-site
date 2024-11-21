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
import { Banner } from "@components/Banner";

const COMMITTEE_STATS: CommitteeStatsTypes = {
  knowledge: 1,
  speeches: 2,
  pacing: 3,
  moderation: 1,
};

export const EspionagePage = (): ReactElement => {
  return (
    <div>
      <NarrowContainer>
        <Spacer height={"15vh"} />
        <Div flex justifyContent="center">
          <StarMarker type="dark" />
        </Div>
        <Header center level={1} mode="dark">
          Espionage & Intelligence
        </Header>
        <Spacer />
      </NarrowContainer>
      <Spacer />
      <NarrowContainer>
        <LetterGrid>
          <Letter>
            <Text mode="dark" bold>
              NATO INTELLIGENCE OPERATIVES:{" "}
            </Text>
            <Text mode="dark">
              Time is running out. The integrity of the world as you know it
              lies in your hands. But be warned: not everyone among you can be
              trusted. A single misstep could be the end of the world as you
              know it.
            </Text>
            <Text mode="dark">
              Our enemies operate silently, and you must follow suit. Failure to
              deliver accurate intelligence could change the trajectory of the
              war and disrupt the global order. Utilize your capabilities, as
              your creativity will be essential to remain unseen.
            </Text>
            <Text mode="dark">
              Rise to what you’ve been chosen for, as the world is watching.
              History will judge us not by our intentions, but our results, so
              tread lightly and act quick.
            </Text>
            <Text mode="dark">Good luck. </Text>
            <Spacer height={"2rem"} />
          </Letter>
          <Div flex flexDirection="col" gap="15px" padding="10px">
            <Portrait
              fullName="Sophie Xu"
              position="Director"
              width="medium"
            />
            <Portrait
              fullName="Caitlin Lim"
              position="Assistant Director"
              width="medium"
            />
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
              <Header level={3}>Espionage and Intelligence Committee</Header>
              <Spacer />
              <Spacer />
              <Text>
                <StyledText subtle>
                  The NATO Espionage and Intelligence Committee represents the
                  intelligence agencies of all NATO members and partners, aiming
                  to gather information to aid North Atlantic Council (NAC)
                  members. A blend between IPC, Ad Hoc, and something special,
                  delegates are not confined to a committee room. You will
                  instead traverse through other committees solving intelligence
                  clues provided by the dais team. Espionage demands
                  resourcefulness and quick thinking as delegates tip-toe around
                  the halls, investigate real people, and send directives to
                  gather vital information however you see fit. Success depends
                  on your ability to outwit your enemies and strategize
                  creatively. With high stakes and unparalleled independence,
                  the Espionage Committee embraces chaos and creativity.
                </StyledText>
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
    </div>
  );
};

export default EspionagePage;

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
