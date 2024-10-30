import { ReactElement, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useTimeout } from '@mantine/hooks';

import { GRADIENTS } from '@src/theme';
import { DarkSection, RADIUS } from '@components/DarkSection';
import { Div, Text } from '@ui-library';

const SectionTestPage = (): ReactElement => {
	const [hideOverlayTitle, setHideOverlayTitle] = useState(false); // use context in reality
	const { start } = useTimeout(() => {
		console.log('ending timeout');
		setHideOverlayTitle(true);
	}, 1_500);

	useEffect(() => {
		start();
		console.log('start timer');
	}, []);

	/**
	 * issues with the overlay methodology:
	 * - navigation pop-in is kinda brutal, the navigation position might need to be handled differently on this page
	 * - the height doesn't quite seem to match, this will need to be adjusted at some point
	 * -
	 */

	return (
		<div id="section-test-page">
			<Div relative>
				<DarkSection id={'hero'}>
					<AnimatedMask hide={hideOverlayTitle}>
						<MaskBackground>
							<SwapContent className="swap-content">
								<Div flex>
									<Text>swap content</Text>
								</Div>
							</SwapContent>
						</MaskBackground>
					</AnimatedMask>
					<SwapContent className="swap-content">
						<Div flex>
							<Text>swap content</Text>
						</Div>
					</SwapContent>
				</DarkSection>
			</Div>
			<DarkSection id={'chunk'}>
				<Filler />
				<Filler>
					<Text>lorem ipsum</Text>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Text>
				</Filler>
			</DarkSection>
			<Filler></Filler>
			<DarkSection id={'part 2'}>
				<Filler size={350}></Filler>
			</DarkSection>
			<Filler size={350}></Filler>
		</div>
	);
};

export default SectionTestPage;

const Filler = styled.div<{ size?: number }>`
	min-height: ${({ size }) => `${size ?? 30}vh`};
`;

const SwapContent = styled.div`
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

// should match actual darkSection
const growPadding = keyframes`
  from {
    padding: 0px;
	width: 100%;
  }
  to {
    padding: 15px 9px;
	width: calc(100% - 18px);
  }
`;
const growContent = keyframes`
  from {
	height: 100vh;
    border-radius: 0px;
  }
  to {
	height: calc(400px + ${RADIUS * 2}px - 1px); // padding - neg margins
    border-radius: ${RADIUS - 1}px; // slight svg offset
  }
`;
const AnimatedMask = styled.div<{ hide?: boolean }>`
	${({ hide }) =>
		hide &&
		css`
			display: none;
		`};
	border: red solid 1px;
	position: absolute;
	top: 0;
	left: 0%;
	width: calc(100% - 18px);
	z-index: 99;
	animation: ${growPadding} 1s forwards ease-in;
`;
const MaskBackground = styled.div`
	border: red solid 1px;
	background: linear-gradient(to bottom, ${GRADIENTS.main});
	animation: ${growContent} 1s forwards ease-in;
	padding: 0px ${RADIUS}px;

	& > *:first-child {
		padding-top: ${RADIUS}px;
		padding-bottom: ${RADIUS}px;
	}
`;
// ${RADIUS * 2}px
