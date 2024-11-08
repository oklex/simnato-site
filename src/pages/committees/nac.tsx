import { ReactElement } from 'react';
import styled from 'styled-components';

import { ViewPortSection } from '@components/ViewPortSection';
import {
	Container,
	Div,
	Header,
	NarrowContainer,
	Spacer,
	Text,
} from '@ui-library';
import HaloUnderline from '@assets/haloUnderline';

export const NACpage = (): ReactElement => {
	return (
		<div>
			<NarrowContainer>
				<Spacer height={'15vh'} />
				<Header center level={1} mode="dark">
					North Atlantic Council
				</Header>
				<Div flex justifyContent="center">
					<HaloUnderline width="26rem" />
				</Div>
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
