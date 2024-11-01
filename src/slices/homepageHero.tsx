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
		<div id="homepage-hero" style={{ position: 'relative' }}>
			<CornerLabel>
				<Text>EST. 2024</Text>
			</CornerLabel>
			<DarkSection id="hero">
				<Spacer height={isMobile ? '8vh' : '15vh'} />
				<SilverBrandLogo scale="16rem" center padding="25px 25px 15px" />
				<Spacer height={isMobile ? '25px' : 0} />
				<Header
					level={1}
					sizeRemOverride={isMobile ? 3.2 : 5.5}
					mode="silver"
					center
					bold
				>
					Simulation NATO
				</Header>
				<Header
					margin={`${isMobile ? '0px' : '-10px'} 0 auto`}
					level={6}
					sizeRemOverride={isMobile ? 1.9 : 2}
					mode="silver"
					center
				>
					Model UN Crisis Conference
				</Header>
				<Spacer height={isMobile ? '15px' : 0} />
				<Text subtle align="center">
					Jan 24 - 26 | Richmond, BC
				</Text>
				<Spacer height={isMobile ? '5vh' : '15vh'} />
			</DarkSection>
		</div>
	);
};

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
