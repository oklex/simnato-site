import React from 'react';
import styled from 'styled-components';
import { HomepageHero } from '../slices/homepageHero';
import { RegistrationInfoSlice } from '../slices/registrationInfoSlice';
import { Div } from '@src/ui-library';
import { Navigation } from '@src/components/Navigation';

export default function Home() {
	return (
		<div>
			<HomepageHero />
			<Div relative>
				<RegistrationInfo>
					<RegistrationInfoSlice />
				</RegistrationInfo>
			</Div>
		</div>
	);
}

const RegistrationInfo = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	max-width: 700px;
`;
