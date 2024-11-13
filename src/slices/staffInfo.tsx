import { ReactElement } from 'react';
import styled from 'styled-components';

import { NarrowContainer, Header, Text, Spacer, Div } from '@src/ui-library';
import { BREAKPOINTS } from '@src/theme';
import { Portrait } from '@src/components/Portrait';

export const StaffInfo = (): ReactElement => {
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
				<Span2Columns />

				<Portrait />
				<Portrait />
				<Span2Columns>
					<Header mode="dark" level={6}>
						Simulation Architects
					</Header>
					<Spacer />
					<Text mode="dark">
						Responsible for the high-level structure of the committee and
						simulation dynamics.
					</Text>
				</Span2Columns>
				<Div>
					<Header mode="dark" level={6}>
						Committee Staff
					</Header>
					<Spacer />
					<Text mode="dark">
						Responsible for research and planning for their respective
						committee.
					</Text>
				</Div>
				<Portrait />
				<Portrait />
				<Portrait />
				<Portrait />
				<Portrait />
				<Portrait />
				<Portrait />
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
