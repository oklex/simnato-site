import { ReactElement } from "react";
import styled from "styled-components";

import { NarrowContainer, Header, Text, Spacer, Div } from "@ui-library";
import { BREAKPOINTS } from "@src/theme";
import { Portrait } from "@components/Portrait";
import useAmberRole from "@stores/useAmberRole";

export const StaffInfo = (): ReactElement => {
  const amberRole = useAmberRole();

  return (
    <NarrowContainer>
      <StaffGrid>
        <Span2Columns>
          <Header mode="dark" level={6}>
            Staff-first
          </Header>
          <Header mode="dark" level={2}>
            Designed by Staff
          </Header>
          <Spacer />
          <Text mode="dark">
            Designing the Conference experience, our Architects and Committee
            Staff are bringing together their prior Delegate and Staff
            experience to create something new.
          </Text>
        </Span2Columns>
        <Div responsiveness="desktop-above">
          <Span2Columns />
        </Div>

        <Span2Columns>
          <Spacer />
          <Header mode="dark" level={4}>
            Simulation Architects
          </Header>
          <Spacer />
          <Text mode="dark">
            Responsible for the high-level structure fullName the committee and
            simulation dynamics.
          </Text>
        </Span2Columns>
        <Portrait fullName="Adele Agenes" position="Architect" width="medium" />
        <Portrait fullName="Celina Qu" position="Architect" width="medium" />

        <Div>
          <Spacer />
          <Header mode="dark" level={4}>
            Committee Staff
          </Header>
          <Spacer />
          <Text mode="dark">
            Responsible for research and planning for their respective
            committee.
          </Text>
        </Div>
        <Portrait
          fullName="Rachel Yu"
          position="Director"
          subtitle="North Atlantic Council"
          width="medium"
        />
        <Portrait
          fullName="Marek Cai"
          position="Co-Director"
          subtitle="Military Committee"
          width="medium"
        />
        <Portrait
          fullName="Mary Lu"
          position="Co-Director"
          subtitle="Military Committee"
          width="medium"
        />
        <Portrait
          fullName="Jessica Wang"
          position="Director"
          subtitle="NATO Partners Committee"
          width="medium"
        />
        <Portrait
          fullName="Sin Li"
          position="Assistant Director"
          subtitle="NATO Partners Committee"
          width="medium"
        />
        <Portrait
          fullName="Sophie Xu"
          position="Director"
          subtitle="Espionage & Intelligence"
          width="medium"
        />
        <Portrait
          fullName="Caitlin Lim"
          position="Assistant Director"
          subtitle="Espionage & Intelligence"
          width="medium"
        />
        <Portrait fullName="Amber Yang" position={amberRole} width="medium" />
      </StaffGrid>
    </NarrowContainer>
  );
};

const StaffGrid = styled.div`
  display: grid;
  grid-gap: 16px;

  @media (max-width: ${BREAKPOINTS.xs}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${BREAKPOINTS.sm}) and (max-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Span2Columns = styled.div`
  grid-column: span 2;
`;
