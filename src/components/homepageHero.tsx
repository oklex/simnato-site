import React, { ReactElement } from 'react';
import Section from '../ui-library/Section';
import GoldBrandLogo from '../assets/goldLogo';
import Header from '../ui-library/Header';
import Text from '../ui-library/Text';
import StyledText from '../ui-library/StyledText';
import styled from 'styled-components';

export const HomepageHero = (): ReactElement => {
	return (
		<div id="homepage-hero">
			<StyledSection mode="dark" gradient="vertical">
				<GoldBrandLogo scale="18rem" center padding="150px 25px 25px" />
				<Header level={1} mode="light">
					Dark Mode with <StyledText bold>Vertical Gradient</StyledText>
				</Header>
				<Text mode="light">
					This section has a horizontal gradient background.
				</Text>
			</StyledSection>
		</div>
	);
};

const StyledSection = styled(Section)`
	height: 90vh;
	max-height: 2167;
`;
