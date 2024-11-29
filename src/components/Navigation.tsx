import React, { ReactElement, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import Link from 'next/link';

import { NavThemeContext } from '@context/navTheme';
import TextLogo from '@assets/textLogo';
import { Div, Icon, Text } from '@ui-library';
import useScreenSize from '@stores/useScreenSize';

import { PALETTE } from '../theme';
import FullScreenModal from './FullScreenModal';
const RADIUS = 12;

export const Navigation = ({ sticky }: { sticky?: boolean }): ReactElement => {
	const { theme } = useContext(NavThemeContext);
	const { isMobile } = useScreenSize()
	const [openNav, setOpenNav] = useState(false);
	const onLightBackground = theme === 'light' || openNav;

	const toggleModal = () => setOpenNav((prev) => !prev);

	const showNav = () => (
		<>
			<NavigationWrapper sticky={!!sticky} isMobile={isMobile} id="registration-nav">
				<StyledNav shouldBeTransparent={onLightBackground}>
					<NavContent>
						<Link href="/">
							<TextLogo
								height="1.4rem"
								color={onLightBackground ? 'black' : 'white'}
							/>
						</Link>
						<BigNavSpace flex justifyContent='end' onClick={toggleModal}>
							<Icon
								icon={openNav ? 'x' : 'menu'}
								mode={onLightBackground ? 'dark' : 'light'}
							/>
						</BigNavSpace>
						{/* <Link href="/registration">
							<Text
								mode={onLightBackground ? 'dark' : 'silver'}
								size="md"
								uppercase
								spaced
							>
								register
							</Text>
						</Link> */}
					</NavContent>
				</StyledNav>
			</NavigationWrapper>
			<FullScreenModal isOpen={openNav} onClose={toggleModal}>
				<Text>hello world</Text>
			</FullScreenModal>
		</>
	);

	return showNav();
};

const NavContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const NavigationWrapper = styled.div<{ sticky: boolean, isMobile: boolean }>`
	width: ${({ isMobile }) => isMobile ? '100%': 'calc(100% - 10px)'};
	display: flex;
	justify-content: center;

	position: ${({ sticky }) => (sticky ? 'sticky' : 'fixed')};
	z-index: 999;
	left: 0;
	top: 30px;
`;

const StyledNav = styled.button<{ shouldBeTransparent: boolean }>`
	padding: 0.6rem 1rem;
	width: calc(100% - 50px);

	/* Larger screens, subtract 440px, but max out at 1200px */
	@media (min-width: 769px) {
		max-width: calc(100vw - 440px);
		max-width: 950px; /* Ensure it doesn't exceed 1200px */
	}

	border: none;
	outline: none;
	position: relative;
	z-index: 1;
	border-radius: ${RADIUS}px;
	background: linear-gradient(
		to right,
		${({ shouldBeTransparent }) =>
			shouldBeTransparent ? PALETTE.silver.main : PALETTE.gold.main},
		${({ shouldBeTransparent }) =>
			rgba(shouldBeTransparent ? PALETTE.blue.dark : PALETTE.gold.light, 0.3)}
	);
	align-items: center;

	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		left: 1px;
		right: 1px;
		top: 1px;
		bottom: 1px;
		border-radius: ${RADIUS}px;
		background-color: ${({ shouldBeTransparent: lightBackground }) =>
			lightBackground === true ? PALETTE.silver.main : '#313979'};
		z-index: -1;
		transition: 200ms;
		${({ shouldBeTransparent }) =>
			shouldBeTransparent &&
			css`
				opacity: 60%;
			`}
	}

	&:hover::before {
		opacity: 80%;
	}

	& > * {
		align-items: center;
		align-self: center;
	}
`;

const BigNavSpace = styled(Div)`
	flex-grow: 1;
	cursor: pointer;
`
