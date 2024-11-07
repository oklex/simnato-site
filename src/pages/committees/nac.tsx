import { ReactElement } from 'react';
import styled from 'styled-components';

import { ViewPortSection } from '@components/ViewPortSection';
import { Container, Header, NarrowContainer, Spacer, Text } from '@ui-library';

export const NACpage = (): ReactElement => {
	return (
		<div>
			<NarrowContainer>
				<Spacer height={'15vh'} />
				<Header center level={1} mode="dark">
					North Atlantic Council
				</Header>
				<Spacer />
			</NarrowContainer>
			<Spacer />
			<NarrowContainer>
					<Text mode="dark">overview</Text>
			</NarrowContainer>
		</div>
	);
};

export default NACpage;
