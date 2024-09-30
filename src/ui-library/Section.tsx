import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { MODES, PALETTE, GRADIENTS } from '../theme';

type SectionProps = {
	children: ReactNode;
	mode?: MODES;
	gradient?: 'vertical' | 'horizontal' | undefined;
};

// Full-width section that stretches edge to edge of the screen
const FullWidthSection = styled.section<{
	mode: MODES;
	gradient?: 'vertical' | 'horizontal' | undefined;
}>`
	width: 100%;
	background-color: ${(props) => {
		switch (props.mode) {
			case 'light':
				return PALETTE.mono.near_white;
			case 'dark':
				return PALETTE.blue.dark;
			case 'gold':
				return PALETTE.gold.main;
			case 'blue':
				return PALETTE.blue.main;
			default:
				return PALETTE.mono.main;
		}
	}};

	${(props) =>
		props.gradient &&
		`
    background: linear-gradient(
      ${props.gradient === 'vertical' ? 'to bottom' : 'to right'},
      ${
				props.mode === 'light'
					? GRADIENTS.light
					: props.mode === 'dark'
					? GRADIENTS.dark
					: props.mode === 'gold'
					? GRADIENTS.near_white
					: GRADIENTS.main
			}
    );
  `}
`;

// Generic responsive container inside the full-width section
const Container = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	padding: 20px 20px;
`;

const Section: FC<SectionProps> = ({
	children,
	mode = 'light',
	gradient = undefined,
}) => {
	return (
		<FullWidthSection mode={mode} gradient={gradient}>
			<Container>{children}</Container>
		</FullWidthSection>
	);
};

export default Section;
