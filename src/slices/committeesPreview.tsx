import { ReactElement } from 'react';

import StarMarker from '@src/assets/starMarkers';
import { DarkSection } from '@src/components/DarkSection';
import { Div, Header, NarrowContainer, Text } from '@ui-library';

export const CommitteesPreview = (): ReactElement => {
	return (
		<DarkSection id="committees-preview" gradientDirection="to left">
			<Div flex justifyContent="center">
				<StarMarker type="blue" />
			</Div>
			<Header center level={2}>
				The different faces of NATO
			</Header>
			<NarrowContainer size="sm">
				<Text>
					Reflecting the inner-workings of real-life NATO, our four committees
					all carry a unique set of power and limitations, guided by the NATO
					constitution and it’s member nations’ intention -- friendly or not.
				</Text>
			</NarrowContainer>
		</DarkSection>
	);
};
