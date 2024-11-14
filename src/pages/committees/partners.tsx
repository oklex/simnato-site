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

export const PartnersPage = (): ReactElement => {
  return (
    <div>
      <NarrowContainer>
        <Spacer height={"15vh"} />
        <Div flex justifyContent="center">
          <StarMarker type="gold" />
        </Div>
        <Header center level={1} mode="dark">
          NATO Partners
        </Header>
        <Spacer />
      </NarrowContainer>
      <Spacer />
      <NarrowContainer>
        <LetterGrid>
          <Letter>
            <Text mode="dark">Dear Delegates,</Text>
            <Spacer />
            <Text mode="dark">
              My name is Jessica Wang and I have the honor of serving as your
              Director for the Partners Committee for the first iteration of
              SimNATO. It is with great pleasure that I welcome you to the World
              Health Organization, where we will explore our two fascinating
              topics: the Russo-Ukraine War and Rising Tensions in the South
              China Sea.
            </Text>
            <Text mode="dark">
              I started my Model United Nations journey as a 9th grader with the
              crushing fear that I started MUN too late, and I would never be
              able to catch up to my peers. However, I soon grew to realize that
              my fears were misplaced. As I immersed myself further in the MUN
              community, I grew to develop an immense love and passion for the
              world of Model United Nations, which spurred me to constantly aim
              to develop my skills and push myself to the next level.
            </Text>
            <Text mode="dark">
              I hope that SimNATO Partners can provide you a fun, interesting,
              and new MUN experience and if you have any questions, comments, or
              concerns please do not hesitate to reach out to me through my
              email [something@something.com].{" "}
            </Text>

            <Text mode="dark">
              Sincerely,
              <br />
              Jessica Wang
              <br />
              Director of the Partners Committee
              <br />
              SimNATO
              <br />
            </Text>
          </Letter>

          <Div flex flexDirection="col" gap="15px" padding="10px">
            <Portrait
              fullName="Jessica Wang"
              position="Director"
              width="medium"
            />
            <Portrait
              fullName="Sin Li"
              position="Assistant Director"
              width="medium"
            />
          </Div>
        </LetterGrid>
      </NarrowContainer>
    </div>
  );
};

export default PartnersPage;

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
