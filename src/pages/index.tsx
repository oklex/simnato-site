import React from 'react';
import { HomepageHero } from '../components/homepageHero';
import styled from 'styled-components';
import { RegistrationInfoSlice } from '../components/registrationInfoSlice';

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
