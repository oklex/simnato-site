import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS, MODES } from '../theme';

type HeaderProps = {
	children: ReactNode;
	mode?: MODES;
	level?: number;
	sizeRemOverride?: number;
	bold?: boolean;
	center?: boolean;
};

// Utility function to determine the heading level (h1, h2, etc.)
const getHeadingTag = (level: number): keyof JSX.IntrinsicElements =>
	`h${level}` as keyof JSX.IntrinsicElements;

// Styled component for dynamic heading
const StyledHeader = styled.div<{
	mode: MODES;
	sizeRemOverride?: number;
	bold: boolean;
	center: boolean;
}>`
	color: ${(props) => {
		switch (props.mode) {
			case 'light':
				return COLORS.mono.near_white; // White text
			case 'dark':
				return COLORS.blue.dark; // Dark blue text
			case 'gold':
				return COLORS.gold.main; // Gold text
			case 'blue':
				return COLORS.blue.main; // Blue text
			default:
				return COLORS.mono.main; // Default color
		}
	}};
	font-size: ${(props) =>
		props.sizeRemOverride ? `${props.sizeRemOverride}rem` : 'inherit'};
	font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
	text-align: ${(props) => (props.center ? 'center' : 'left')};
`;

const Header: FC<HeaderProps> = ({
	children,
	mode = 'light',
	level = 1,
	sizeRemOverride,
	bold = false,
	center = false,
}) => {
	const HeadingTag = getHeadingTag(level); // Determine the heading tag (h1, h2, etc.)

	return (
		<StyledHeader
			as={HeadingTag} // Pass the dynamic heading tag
			mode={mode}
			sizeRemOverride={sizeRemOverride}
			bold={bold}
			center={center}
		>
			{children}
		</StyledHeader>
	);
};

export default Header;
