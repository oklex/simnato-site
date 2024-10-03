import React from "react";
import { Container, Header, Section, StyledText, Text } from "../ui-library";
import styled from "styled-components";

export default function RegistrationPage() {
  return (
    <div>
      <Section mode="dark" height={"calc(100vh - 30px)"}>
        <Container center>
          <HeaderContainer>
            <Header level={2}>
              <StyledText bold>
                Priority Registration
              </StyledText>
              <br />
              exclusively for registered clubs
            </Header>
          </HeaderContainer>
          <Text>Hello world</Text>
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
