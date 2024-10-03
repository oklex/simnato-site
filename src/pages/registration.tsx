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

export default function RegistrationPage() {
  return (
    <div>
      <Section mode="dark" height={"calc(100vh - 30px)"}>
        <Container center>
          <HeaderContainer>
            <StarMarker type="gold" />
            <Header level={2} mode='dark'>
              <StyledText bold mode="gold">
                Priority Registration
              </StyledText>{" "}
              <StyledText subtle>
                available
                <br />
                exclusively for registered clubs
              </StyledText>
            </Header>
          </HeaderContainer>
          <Spacer />
          <Text subtle mode='dark'>Opens Oct. 29 — until Dec. 1st</Text>
        </Container>
      </Section>
    </div>
  );
}

const HeaderContainer = styled.div`
  padding-top: 30vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 650px;
`;
