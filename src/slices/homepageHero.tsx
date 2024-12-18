import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Header, Spacer, Text } from '@ui-library';
import { PALETTE } from '../theme';
import useScreenSize from '@stores/useScreenSize';
import SilverBrandLogo from '@assets/silverLogo';
import GoldBrandLogo from '@src/assets/goldLogo';
import ShimmeringLogo from '@src/assets/shimmeringLogo';
import { ViewPortSection } from '@src/components/ViewPortSection';

export const HomepageHero = (): ReactElement => {
	const { isMobile } = useScreenSize();
	return (
		<HeroSection id="homepage-hero">
			<CornerLabel>
				{/* <Text>EST. 2024</Text> */}
			</CornerLabel>
			<ViewPortSection id="hero">
				<Spacer height={isMobile ? '5vh' : '5vh'} />
				{/* <SilverBrandLogo scale="13rem" center padding="25px 25px 15px" /> */}
				<ShimmeringLogo  scale="13rem" center padding="25px 25px 15px" />
				<Spacer height={isMobile ? '5px' : 0} />
				<Header level={1} mode="silver" center bold>
					{isMobile ? 'SimNATO' : 'Simulation NATO'}
				</Header>
				<Header level={isMobile ? 5 : 4} mode="silver" center>
					{isMobile ? 'MUN Crisis Conference' : 'Model UN Crisis Conference'}
				</Header>
				<Spacer height="15px" />
				<Text subtle align="center">
					March 8th - 9th, 2025 | Richmond, BC
				</Text>
				<Spacer height={isMobile ? '5vh' : '5vh'} />
			</ViewPortSection>
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
