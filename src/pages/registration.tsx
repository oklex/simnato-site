import React from "react";
import {
  Container,
  Header,
  Section,
  Spacer,
  StyledText,
  Text,
} from "../ui-library";
import styled from "styled-components";
import StarMarker from "../assets/starMarkers";
import { PALETTE } from "../theme";

export default function RegistrationPage() {
  return (
    <div>
      <Section mode="dark">
        <Container center>
          <SubContainer>
            <Spacer height={"30vh"} />
            <StarMarker type="gold" />
            <Header level={2} mode="dark">
              <StyledText bold mode="gold">
                Priority Registration
              </StyledText>{" "}
              <StyledText subtle>
                available
                <br />
                exclusively for registered clubs
              </StyledText>
            </Header>
          </SubContainer>
          <Spacer />
          <Text subtle mode="dark">
            Opens Oct. 28 — until Dec. 1st
          </Text>
          <Spacer height={"10vh"} />
        </Container>
      </Section>
      <Spacer height={"100px"} />
      <Container center>
        <InfoRow>
          <DottedLine>
            <Header level={6} mode="dark">
              <StyledText bold>Club Registration</StyledText>{" "}
              <StyledText size="md" subtle>
                (sponsor teachers optional)
              </StyledText>
            </Header>
          </DottedLine>
          <Text mode="dark">Opening Soon</Text>
        </InfoRow>
        <Spacer height={"1rem"} />
        <InfoRow>
          <DottedLine>
            <Header level={6} mode="dark">
              <StyledText bold>Priority Registration</StyledText> for registered
              clubs
            </Header>
          </DottedLine>
          <Text mode="dark"> Oct. 28th</Text>
        </InfoRow>
        <Spacer height={"1rem"} />
        <InfoRow>
          <DottedLine>
            <Header level={6} mode="dark">
              <StyledText bold>Independent Registration</StyledText> for any and
              all delegates
            </Header>
          </DottedLine>
          <Text mode="dark"> Dec. 1st</Text>
        </InfoRow>
      </Container>
    </div>
  );
}

const SubContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 650px;
`;

const InfoRow = styled.div`
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  opacity: 0.9;

  & > * {
    white-space: nowrap; /* Prevents text from wrapping */
  }
`;

const DottedLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px dotted #000; /* Adjust color as needed */
    margin: 0 10px; /* Adjust spacing between the items */
  }

  > * {
    white-space: nowrap; /* Prevents text from wrapping */
  }
`;
