import React, { ReactElement } from "react";
import styled from "styled-components";
import { StyledText, Text } from "../ui-library";

export const RegistrationInfoSlice = (): ReactElement => {
  return (
    <div id="registration-info">
      <OuterContainer>
        <InnerContainer>
          <Cell align="right" widthPercentage={20}>
            <Text mode="light">club registration</Text>
          </Cell>
          <Cell align="left" padding="0 0 0 10%">
            free
          </Cell>
          <Cell widthPercentage={20}></Cell>
        </InnerContainer>

        <InnerContainer>
          <Cell align="right" widthPercentage={20}>
            <Text mode="light">priority registration</Text>
            <Text mode="light" size="sm" subtle>
              Oct. 29 - Dec 1st
            </Text>
          </Cell>
          <Cell align="left" padding="0 0 0 10%">
            $125{"  "}
            <StyledText subtle size="sm" horizontalPadding="0.5rem">
              (overnight $230)
            </StyledText>
          </Cell>
          <Cell widthPercentage={20} align="center">see more</Cell>
        </InnerContainer>

        <InnerContainer>
          <Cell align="right" widthPercentage={20}>
            <Text mode="light">late registration</Text>
            <Text mode="light" size="sm" subtle>
              Dec. 2nd - tba
            </Text>
          </Cell>
          <Cell align="left" padding="0 0 0 10%">
            tba
            <StyledText subtle size="sm" horizontalPadding="0.5rem">
              (overnight tba)
            </StyledText>
          </Cell>
          <Cell widthPercentage={20} align="center">see more</Cell>
        </InnerContainer>
      </OuterContainer>
    </div>
  );
};

const OuterContainer = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center; /* Centers items horizontally */
  flex-grow: 1;
  gap: 1rem;
`;

const Cell = styled.div<{
  widthPercentage?: number;
  align?: "left" | "center" | "right";
  padding?: string;
}>`
  flex-grow: 1;
  width: ${({ widthPercentage }) => widthPercentage ?? 30}%;

  & > * {
    text-align: ${({ align }) => align || "center"}; /* Text alignment */
    align-items: center; /* Vertically center content */
    align-self: center;
  }
  padding: ${({ padding }) => padding ?? "0.25rem"};
  box-sizing: border-box;
`;
