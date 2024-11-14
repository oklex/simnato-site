import React, { useState } from "react";
import styled from "styled-components";

import { HomepageHero } from "@slices/homepageHero";
import {
  Div,
  Header,
  Section,
  Spacer,
  Text,
  NarrowContainer,
  Modal,
} from "@src/ui-library";
import { StaffInfo } from "@src/slices/staffInfo";
import { CommitteesPreview } from "@src/slices/committeesPreview";
import RichmunWreath from "@src/assets/richmunWreath";
import { BREAKPOINTS } from "@src/theme";

export default function Home() {
  return (
    <div>
      <HomepageHero />
      <Spacer height="50px" />
      <NarrowContainer>
        <SplitScreen>
          <div>
            <Div flex gap="5px">
              <RichmunWreath scale={"30px"} />
              <Div flex flexDirection="col" justifyContent="center">
                <Header mode="dark" level={6}>
                  RichMUN Sponsored Project
                </Header>
              </Div>
            </Div>
            <Header mode="dark" level={2}>
              Crisis Mechanics <br />
              meets Realism
            </Header>
          </div>

          <div>
            <Spacer height={"2.5rem"} />
            <Text mode="dark">
              Reflecting the inner-workings of real-life NATO, four separate
              committees will come together to bring delegates into a simulated
              world, where choices will ripple through the conference, it’s
              committees, and influence other delegate’s choices to come.
            </Text>
            <Spacer />
            <Text mode="dark">
              Work together as tensions escalate and experience the consequences
              of your own actions -- for better or for worse. No outcome is off
              the table.
            </Text>
          </div>
        </SplitScreen>
      </NarrowContainer>
      <Spacer height={"100px"} />
      <StaffInfo />
      <Spacer height={"75px"} />
      <CommitteesPreview />
    </div>
  );
}

const SplitScreen = styled.div`
  @media (min-width: ${BREAKPOINTS.sm}) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    & > div {
      width: 50%;
    }
  }
`;
