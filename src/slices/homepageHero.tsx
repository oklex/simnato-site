import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Header, Spacer, Text } from '@ui-library';
import { PALETTE } from '../theme';
import useScreenSize from '../stores/useScreenSize';
import SilverBrandLogo from '../assets/silverLogo';
import { DarkSection } from '@src/components/DarkSection';

export const HomepageHero = (): ReactElement => {
	const { width, height, isMobile } = useScreenSize();

	return (
		<HeroSection id="homepage-hero">
			<CornerLabel>
				<Text>EST. 2024</Text>
			</CornerLabel>
			<DarkSection id="hero">
				<Spacer height={isMobile ? '5vh' : '5vh'} />
				<SilverBrandLogo scale="13rem" center padding="25px 25px 15px" />
				<Spacer height={isMobile ? '5px' : 0} />
				<Header level={1} mode="silver" center bold>
					Simulation NATO
				</Header>
				<Header level={4} mode="silver" center>
					Model UN Crisis Conference
				</Header>
				<Spacer height="15px" />
				<Text subtle align="center">
					March, 2025 | Richmond, BC
				</Text>
				<Spacer height={isMobile ? '5vh' : '5vh'} />
			</DarkSection>
		</HeroSection>
	);
};

const HeroSection = styled.div`
	position: relative;
`;

const CornerLabel = styled.div`
	position: absolute;
	top: 45px;
	left: 45px;

	& > * {
		color: ${PALETTE.blue.light};
		letter-spacing: 1em;
		font-size: 0.6rem;
	}
`;
