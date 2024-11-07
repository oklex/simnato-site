import { ReactElement } from 'react';
import styled from 'styled-components';

import { ViewPortSection } from '@components/ViewPortSection';
import { Container, Header, NarrowContainer, Spacer, Text } from '@ui-library';

export const NACpage = (): ReactElement => {
	return (
		<div>
			<NarrowContainer>
				<Spacer height={'20vh'} />
				<Header center level={1} mode="dark">
					North Atlantic Council
				</Header>
				<Spacer height={'20vh'} />
			</NarrowContainer>
			<Spacer />
			<NarrowContainer>
				<ViewPortSection id="info-box" mode="mono">
					<Text mode="dark">overview</Text>
				</ViewPortSection>
			</NarrowContainer>
		</div>
	);
};

export default NACpage;
