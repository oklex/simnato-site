import { ReactElement } from 'react';
import styled from 'styled-components';

import { ViewPortSection } from '@components/ViewPortSection';
import { Container, Header, Spacer, Text } from '@ui-library';

export const NACpage = (): ReactElement => {
	return (
		<div>
			<Container>
				<ViewPortSection id="header">
					<Spacer height={'20vh'} />
					<Header level={1}>North Atlantic Council</Header>
					<Spacer height={'20vh'} />
				</ViewPortSection>
				<SplitScreen>
					<SectionWrapper>
						<ViewPortSection id="left" mode='light'>
							<Spacer height={'30vh'} />
							<Text>text</Text>
							<Spacer height={'30vh'} />
						</ViewPortSection>
					</SectionWrapper>

					<SectionWrapper>
						<ViewPortSection id="right" mode='light'>
							<Spacer height={'30vh'} />
							<Text>text</Text>
							<Spacer height={'30vh'} />
						</ViewPortSection>
					</SectionWrapper>
				</SplitScreen>
			</Container>
		</div>
	);
};

export default NACpage;

const SplitScreen = styled.div`
	display: flex;
	gap: 15px;
	width: 100%;
	justify-content: space-between;
`;

const SectionWrapper = styled.div`
	flex: 1;
`;
