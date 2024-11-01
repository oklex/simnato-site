import React from 'react';
import styled from 'styled-components';

import { HomepageHero } from '@slices/homepageHero';
import {
	Div,
	Header,
	Section,
	Spacer,
	Text,
	NarrowContainer,
} from '@src/ui-library';
import { StaffInfo } from '@src/slices/staffInfo';
import { CommitteesPreview } from '@src/slices/committeesPreview';

export default function Home() {
	return (
		<div>
			<HomepageHero />
			<Spacer height="50px" />
			<NarrowContainer>
				<Header mode="dark" level={6}>
					A RichMUN Sponsored Project
				</Header>
				<Header mode="dark" level={2}>
					Crisis Mechanics meets Realism
				</Header>
			</NarrowContainer>
			<NarrowContainer size="sm">
				<Text mode="dark">
					Reflecting the inner-workings of real-life NATO, four separate
					committees will come together to bring delegates into a simulated
					world, where choices will ripple through the conference, it’s
					committees, and influence other delegate’s choices to come.
				</Text>
				<Spacer />
				<Text mode="dark">
					Work together as tensions escalate and experience the consequences of
					your own actions -- for better or for worse. No outcome is off the
					table.
				</Text>
			</NarrowContainer>
			<Spacer height={'100px'} />
			<StaffInfo />
			<Spacer height={'75px'} />
			<CommitteesPreview />
		</div>
	);
}
