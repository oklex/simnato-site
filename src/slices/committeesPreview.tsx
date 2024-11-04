import { ReactElement, useEffect } from 'react';
import styled from 'styled-components';

import StarMarker from '@src/assets/starMarkers';
import { ViewPortSection } from '@src/components/ViewPortSection';
import {
	Button,
	Container,
	Div,
	Header,
	NarrowContainer,
	Spacer,
	Text,
} from '@ui-library';
import { BREAKPOINTS, PALETTE } from '@src/theme';
import useScreenSize from '@src/stores/useScreenSize';
import { renderWorldInContainer } from '@components/GlobeBackground';

export const CommitteesPreview = (): ReactElement => {
	const { isTablet } = useScreenSize();

	// useEffect(() => {
	//   renderWorldInContainer("globeViz"); // Render World into the element with id "globeViz"
	// }, []);

	return (
		<ViewPortSection id="committees-preview" gradientDirection="to left">
			<div id="globeViz" />
			<SubContent>
				<Spacer height={isTablet ? '100px' : '150px'} />
				<Div flex justifyContent="center">
					<StarMarker type="blue" />
				</Div>
				<Header center level={2}>
					The different faces of NATO
				</Header>
				<NarrowContainer size="sm">
					<Text align="center">
						Reflecting the inner-workings of real-life NATO, our four committees
						all carry a unique set of power and limitations, guided by the NATO
						constitution and it’s member nations’ intention -- friendly or not.
					</Text>
				</NarrowContainer>
				<Spacer height={'40px'} />
				<Container>
					<SixColumnGrid>
						<CommitteeBox>
							<Header center level={5} mode="light">
								North Atlantic Council
							</Header>
						</CommitteeBox>
						<CommitteeBox>
							<Header center level={5} mode="light">
								Military Committee
							</Header>
						</CommitteeBox>
						<CommitteeBox>
							<Header center level={5} mode="light">
								Intelligence & Espionage
							</Header>
						</CommitteeBox>
						<CommitteeBox>
							<Text align="center">NATO Partners</Text>
							<Header center level={5} mode="light">
								European Partners
							</Header>
						</CommitteeBox>
						<CommitteeBox>
							<Text align="center">NATO Partners</Text>
							<Header center level={5} mode="light">
								Asian Partners
							</Header>
						</CommitteeBox>
					</SixColumnGrid>
				</Container>
				<Spacer height={'20vh'} />
				<Container>
					<Header level={4} center>
						Ready for the next level?
					</Header>
					<Spacer />
					<Div flex justifyContent="center">
						<Button variant="primary" mode="gold">
							<Header level={6}>Register Now</Header>
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
	border: ${PALETTE.blue.dark} solid 1px;
	min-height: 35px;
	grid-column: span 2;
	background-color: ${PALETTE.blue.main};

	transition: background-color 0.1s ease-out;
	padding: 1rem 0.1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;

	&:hover {
		background-color: ${PALETTE.mono.dark};
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
	border-radius: 15px;
`;

const SubContent = styled.div`
	position: relative;
	z-index: 1; // Ensures content is above the globe background
	color: white;
	padding: 20px;
`;
