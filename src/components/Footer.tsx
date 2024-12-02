import React, { FC } from 'react';
import styled from 'styled-components';

import { COLORS, PALETTE } from '@src/theme';
import { Button, Div, Header, Spacer, StyledText, Text } from '@ui-library';

const Footer: FC = () => {
	const handleSignUpClick = () => {
		window.open(
			'https://forms.gle/vjJJcuLmjRNHj1M99',
			'_blank',
			'noopener,noreferrer'
		); // Replace with the actual form URL
	};

	return (
		<FooterContainer>
			<Div flex justifyContent="center" padding="20px 0px 6px">
				<Header level={6} mode="dark" center>
					Sign up for our mailing list to stay up to date
				</Header>
			</Div>
			<Div flex justifyContent="center">
				<Button variant="text" mode="light" onClick={handleSignUpClick}>
					<Text align="center" mode="gold" size='lg'>
						Enter your email address →
					</Text>
				</Button>
			</Div>
			<Spacer />
			<FadedContent>
				<Text mode="dark" align="center" size="sm">
					<StyledText subtle={true}>
						Simulation NATO by Richmond Model United Nations Association
						<br />
						SimNATO offers student model united nations events. All registration
						fees are handled in CAD.
						<br/>
						logistics@simnato.ca
					</StyledText>
				</Text>
			</FadedContent>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	background-color: ${COLORS.background};
	padding: 4rem 20px 2rem;
	/* width: 100%; */
	text-align: center;
`;

const FadedContent = styled.div`
	opacity: 0.5;
`;

export default Footer;
