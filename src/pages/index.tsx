import React from 'react';
import styled from 'styled-components';
import { HomepageHero } from '../slices/homepageHero';
import { RegistrationInfoSlice } from '../slices/registrationInfoSlice';

export default function Home() {
	return (
		<div>
			<HomepageHero />
			<RegistrationInfo>
				<RegistrationInfoSlice />
			</RegistrationInfo>
			
		</div>
	);
}

const RegistrationInfo = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	max-width: 700px;
`;
