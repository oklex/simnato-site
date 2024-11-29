import { ReactElement } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { ViewPortSection } from '@components/ViewPortSection';
import { Button, Container, Div, Header, NarrowContainer, Spacer, Text } from '@ui-library';
import useScreenSize from '@stores/useScreenSize';

export const CommitteesPreview = (): ReactElement => {
  const { isTablet } = useScreenSize();

  return (
    <ViewPortSection id="committees-preview" gradientDirection="to left">
      <div id="globeViz" />
      <SubContent>
        <Spacer height={isTablet ? '100px' : '150px'} />
        <Div flex justifyContent="center">
          {/* StarMarker remains as is */}
        </Div>
        <Header center level={2}>The different faces of NATO</Header>
        <NarrowContainer size="sm">
          <Text align="center">
            Reflecting the inner-workings of real-life NATO, our four committees all carry a unique set of power and limitations, guided by the NATO constitution and its member nations’ intention -- friendly or not.
          </Text>
        </NarrowContainer>
        <Spacer height="40px" />
        <Container>
          <SixColumnGrid>
            {/* Proper integration with Link */}
            <Link href="/committees/nac" passHref>
              <CommitteeBox>
                <Header center level={5} mode="light">North Atlantic Council</Header>
              </CommitteeBox>
            </Link>
            <Link href="/committees/mc" passHref>
              <CommitteeBox>
                <Header center level={5} mode="light">Military Committee</Header>
              </CommitteeBox>
            </Link>
            <Link href="/committees/espionage" passHref>
              <CommitteeBox>
                <Header center level={5} mode="light">Intelligence & Espionage</Header>
              </CommitteeBox>
            </Link>
            <Link href="/committees/partners" passHref>
              <CommitteeBox>
                <Text align="center">NATO Partners</Text>
                <Header center level={5} mode="light">European Partners</Header>
              </CommitteeBox>
            </Link>
            <Link href="/committees/partners" passHref>
              <CommitteeBox>
                <Text align="center">NATO Partners</Text>
                <Header center level={5} mode="light">Asian Partners</Header>
              </CommitteeBox>
            </Link>
          </SixColumnGrid>
        </Container>
        <Spacer height="30vh" />
        <Container>
          <Header level={3} center>Ready for the next level?</Header>
          <Spacer />
          <Div flex justifyContent="center">
            <Button href="/registration" variant="primary" mode="gold">
              <Header level={5}>Register Now</Header>
            </Button>
          </Div>
        </Container>
      </SubContent>
    </ViewPortSection>
  );
};

const SixColumnGrid = styled.div`
  display: grid;
  grid-gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);

    & > *:nth-child(4) {
      grid-column: 2 / span 2;
    }
    & > *:nth-child(5) {
      grid-column: 4 / span 2;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CommitteeBox = styled.a`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.blue.dark};
  min-height: 35px;
  grid-column: span 2;
  background-color: ${({ theme }) => theme.colors.blue.main};
  transition: background-color 0.1s ease-out;
  padding: 1rem 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  border-radius: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mono.dark};
    h4,
    h5,
    h6,
    p {
      background: linear-gradient(
        0deg,
        #9f7622 0%,
        #d4c5a6 36%,
        #f2ebdd 50%,
        #d4c5a6 64%,
        #9f7622 100%
      );
      background-size: 300% 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const SubContent = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  padding: 20px;
`;

