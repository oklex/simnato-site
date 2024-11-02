import { ReactElement } from 'react';
import styled from 'styled-components';

import StarMarker from '@src/assets/starMarkers';
import { DarkSection } from '@src/components/DarkSection';
import { Div, Header, NarrowContainer, Text } from '@ui-library';
import { BREAKPOINTS } from '@src/theme';

export const CommitteesPreview = (): ReactElement => {
	return (
		<DarkSection id="committees-preview" gradientDirection="to left">
			<Div flex justifyContent="center">
				<StarMarker type="blue" />
			</Div>
			<Header center level={2}>
				The different faces of NATO
			</Header>
			<NarrowContainer size="sm">
				<Text>
					Reflecting the inner-workings of real-life NATO, our four committees
					all carry a unique set of power and limitations, guided by the NATO
					constitution and it’s member nations’ intention -- friendly or not.
				</Text>
			</NarrowContainer>
			<SixColumnGrid>
				<CommitteeBox />
				<CommitteeBox />
				<CommitteeBox />
				<CommitteeBox />
				<CommitteeBox />
			</SixColumnGrid>
		</DarkSection>
	);
};

const SixColumnGrid = styled.div`
	display: grid;
	grid-gap: 16px;

	/* Make each child span 2 columns */
	@media (min-width: ${BREAKPOINTS.md}) {
		/* Define the base grid with 6 columns */
		grid-template-columns: repeat(6, 1fr);

		& > *:nth-child(4) {
			grid-column: 2 / span 2;
		}
		& > *:nth-child(5) {
			grid-column: 4 / span 2;
		}
	}

	/* Adjust the number of columns at different breakpoints if needed */
	@media (max-width: ${BREAKPOINTS.md}) {
		grid-template-columns: repeat(4, 1fr); /* 4 columns on medium screens */
	}

	@media (max-width: ${BREAKPOINTS.sm}) {
		grid-template-columns: 1fr; /* 2 columns on small screens */
		& > * {
			grid-column-start: auto !important;
		}
	}

	@media (max-width: ${BREAKPOINTS.xs}) {
		grid-template-columns: 1fr; /* 1 column on extra small screens */
		& > * {
			grid-column-start: auto !important;
		}
	}
`;

const CommitteeBox = styled.div`
	border: black solid 1px;
	min-height: 35px;
	grid-column: span 2;

	background-color: black;
`;
