import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { PALETTE } from '../theme';

export const RegistrationNav = (): ReactElement => {
	return (
		<NavigationWrapper id="registration-nav">
			<StyledNav>
				<NavContent>
					<span>logo</span>
					<span>register</span>
				</NavContent>
			</StyledNav>
		</NavigationWrapper>
	);
};

const NavContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const NavigationWrapper = styled.div`
	display: flex;
	justify-content: center;
	// I think this should work
	position: sticky;
	top: 25px;
	// matches container
	max-width: 1200px;
	padding: 20px 20px;
`;

const StyledNav = styled.button`
	padding: 1rem 1.3rem;
	width: 100%;

	border: none;
	outline: none;
	position: relative;
	z-index: 1;
	border-radius: 20px;
	background: linear-gradient(
		to right,
		${PALETTE.gold.main},
		${rgba(PALETTE.gold.light, 0.1)}
	);
	transition: 200ms;

	cursor: pointer;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		left: 1px;
		right: 1px;
		top: 1px;
		bottom: 1px;
		border-radius: 20px;
		background-color: #313979;
		z-index: -1;
		transition: 400ms;
	}

	&:hover {
		background: linear-gradient(
			to right,
			${PALETTE.gold.main} 0%,
			${rgba(PALETTE.gold.light, 0.1)} 50%,
			${PALETTE.gold.main} 100%
		);
	}
`;
