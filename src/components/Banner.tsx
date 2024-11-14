import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { Icon, Text, Div } from '@ui-library';
import { PALETTE, GRADIENTS, COLORS, BREAKPOINTS } from '@src/theme';

type BannerProps = {
	type: 'neutral' | 'warning' | 'notice' | 'important'; // add more types later
	noMargin?: boolean;
	children?: string | JSX.Element | (string | JSX.Element)[];
	justifyContent?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
};

export const Banner = ({
	type,
	noMargin,
	justifyContent,
	children,
}: BannerProps) => {
	const mode = type === 'neutral' || type === 'notice' ? 'dark' : 'light';

	return (
		<StyledBanner noMargin={noMargin} color={type}>
			{type === 'warning' && (
				<Icon mode={mode} icon={type} spaceAfter title={type} />
			)}
			<Div
				flex
				justifyContent={justifyContent ?? 'center'}
				width="100%"
				gap="3px"
				flexDirection="col"
			>
				{children &&
					Array.isArray(children) &&
					children.map((c) => (
						<Text align="center" mode={mode}>
							{c}
						</Text>
					))}
				{children && !Array.isArray(children) && (
					<Text align="center" mode={mode}>
						{children}
					</Text>
				)}
			</Div>
		</StyledBanner>
	);
};

const StyledBanner = styled.div<{
	noMargin?: boolean;
	color?: 'neutral' | 'warning' | 'notice' | 'important';
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	${({ color }) => {
		if (color === 'neutral') {
			return css`
				background-color: ${PALETTE.silver.main};
				p {
					color: ${COLORS.baseText};
				}
			`;
		}

		if (color === 'warning') {
			return css`
				background-color: ${PALETTE.gold.main};
				p {
					color: ${COLORS.darkText};
				}
			`;
		}

		if (color === 'notice') {
			return css`
				background-color: ${PALETTE.blue.light};
				p {
					color: ${COLORS.darkText};
				}
			`;
		}

		if (color === 'important') {
			return css`
				background: linear-gradient(0deg, ${GRADIENTS.main});
				p {
					color: ${COLORS.lightText};
				}
				a {
					color: ${COLORS.lightText};
					font-weight: 500;
				}
			`;
		}
	}}

	border-radius: 12px;
	padding: 0.3rem;

	${({ noMargin }) =>
		noMargin
			? css`
					margin: 0 !important;
			  `
			: css`
					margin: 10px;
			  `}
`;
