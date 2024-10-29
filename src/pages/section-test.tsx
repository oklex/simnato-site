import { ReactElement } from 'react';
import styled from 'styled-components';

import { DarkSection } from '@components/DarkSection';
import { Text } from '@ui-library';

const SectionTestPage = (): ReactElement => {
	return (
		<div id="section-test-page">
			<DarkSection id={'hero'}>
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
			{/* <DarkSection id={'part 3'}>
				<Filler></Filler>
			</DarkSection> */}
			<Filler size={350}></Filler>
		</div>
	);
};

export default SectionTestPage;

const Filler = styled.div<{ size?: number }>`
	min-height: ${({ size }) => `${size ?? 30}vh`};
`;
