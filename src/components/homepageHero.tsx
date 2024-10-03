import React, { ReactElement } from 'react';
import styled from 'styled-components';
import GoldBrandLogo from '../assets/goldLogo';
import { Header, Spacer, Text, Section } from '../ui-library';
import { RegistrationNav } from './RegistrationNav';
import { PALETTE } from '../theme';
import { RegistrationInfoSlice } from './registrationInfoSlice';
import useScreenSize from '../stores/useScreenSize';

export const HomepageHero = (): ReactElement => {
	const { width, height, isMobile } = useScreenSize();

	return (
		<div id="homepage-hero" style={{ position: 'relative' }}>
			<CornerLabel>
				<Text>EST. 2024</Text>
			</CornerLabel>
			<Section center mode="dark" gradient={360}>
				<Spacer height={isMobile ? '8vh' :'15vh'} />
				<GoldBrandLogo scale="16rem" center padding="25px 25px 15px" />
				<Spacer height={isMobile ? '25px' : 0} />
				<Header
					level={1}
					sizeRemOverride={isMobile ? 3.2 : 5.5}
					mode="gold"
					center
					bold
				>
					Simulation NATO
				</Header>
				<Header
					margin={`${isMobile ? '0px' : '-10px'} 0 auto`}
					level={6}
					sizeRemOverride={isMobile ? 1.9 : 2}
					mode="light"
					center
				>
					Model UN Crisis Conference
				</Header>
				<Spacer height={isMobile ? '15px' : 0} />
				<Text subtle align="center">
					Jan 24 - 26 | Richmond, BC
				</Text>
				<Spacer height={isMobile ? '5vh' : '15vh'} />
			</Section>
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
