import { DarkSection } from '@src/components/DarkSection';
import { ReactElement } from 'react';
import styled from 'styled-components';

const SectionTestPage = (): ReactElement => {
	return (
		<div id="section-test-page">
			<DarkSection id={'hero'}>
				<Filler></Filler>
			</DarkSection>
			<Filler></Filler>
			<DarkSection id={'part 2'}>
				<Filler size={75}></Filler>
			</DarkSection>
			<DarkSection id={'part 3'}>
				<Filler></Filler>
			</DarkSection>
		</div>
	);
};

export default SectionTestPage;

const Filler = styled.div<{size?: number}>`
	min-height: ${({ size }) => `${size ?? 30}vh` };
`;
