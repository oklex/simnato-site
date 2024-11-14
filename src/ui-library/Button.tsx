import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { MODES, PALETTE } from '../theme';

type ButtonProps = {
	children?: React.ReactNode;
	mode: MODES;
	variant?: 'primary' | 'outline' | 'light' | 'text';
	href?: string;
	onClick?: (e: any) => void;
};

export const Button: React.FC<ButtonProps> = ({
	children,
	mode,
	variant = 'light',
	href,
	onClick,
}) => {
	if (href) {
		return (
			<Link href={href} passHref>
				<StyledButton mode={mode} variant={variant} as="a">
					{children ?? ''}
				</StyledButton>
			</Link>
		);
	}

	return (
		<StyledButton mode={mode} variant={variant} onClick={onClick}>
			{children && children}
		</StyledButton>
	);
};

const StyledButton = styled.button<{
	mode: MODES;
	variant: 'primary' | 'outline' | 'light' | 'text';
}>`
	padding: 0.5rem 1.2rem;
	border-radius: 5px;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.15s ease-in-out;
	display: inline-block;

	transform: scale(1);

	&:hover {
		transform: scale(1.05);
	}

	${(props) => {
		switch (props.variant) {
			case 'primary':
				return css`
					background-color: ${props.mode === 'light' || props.mode === 'gold'
						? PALETTE.gold.main
						: PALETTE.blue.main};
					color: ${PALETTE.mono.near_white};
					border: none;

					&:hover {
						background-color: ${props.mode === 'light' || props.mode === 'gold'
							? PALETTE.gold.dark
							: PALETTE.blue.dark};
					}
				`;
			case 'outline':
				return css`
					background-color: transparent;
					color: ${props.mode === 'light' || props.mode === 'gold'
						? PALETTE.gold.main
						: PALETTE.blue.main};
					border: 2px solid
						${props.mode === 'light' || props.mode === 'gold'
							? PALETTE.gold.main
							: PALETTE.blue.main};

					&:hover {
						background-color: ${props.mode === 'light' || props.mode === 'gold'
							? PALETTE.gold.main
							: PALETTE.blue.main};
						color: ${PALETTE.mono.near_white};
					}
				`;
			case 'light':
				return css`
					background-color: ${props.mode === 'light' || props.mode === 'gold'
						? PALETTE.gold.light
						: PALETTE.blue.light};
					color: ${props.mode === 'light' || props.mode === 'gold'
						? PALETTE.gold.dark
						: PALETTE.blue.main};
					border: none;

					&:hover {
						background-color: ${props.mode === 'light' || props.mode === 'gold'
							? PALETTE.gold.main
							: PALETTE.blue.main};
						color: ${PALETTE.mono.near_white};
					}
				`;
			case 'text':
				return css`
					background-color: transparent;
					color: ${props.mode === 'light' || props.mode === 'gold'
						? PALETTE.gold.main
						: PALETTE.blue.main};
					border: none;
					padding: 0; /* No padding for text buttons */

					&:hover {
						color: ${props.mode === 'light' || props.mode === 'gold'
							? PALETTE.gold.dark
							: PALETTE.blue.dark};
						text-decoration: underline; /* Text button hover effect */
					}
				`;
		}
	}}
`;
