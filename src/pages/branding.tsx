import React from 'react';
import styled from 'styled-components';
import { Section, Button } from '../ui-library';

const BrandingPage = () => {
	return (
		<PageWrapper>
			<h1>Button Variations</h1>
			<Section>
				<h2>Primary Buttons</h2>
				<Button mode="light" variant="primary" >
					Primary Light
				</Button>
				<Button mode="dark" variant="primary">
					Primary Dark
				</Button>
				<Button mode="gold" variant="primary">
					Primary Gold
				</Button>
				<Button mode="blue" variant="primary">
					Primary Blue
				</Button>
			</Section>

			<Section>
				<h2>Outline Buttons</h2>
				<Button mode="light" variant="outline">
					Outline Light
				</Button>
				<Button mode="dark" variant="outline">
					Outline Dark
				</Button>
				<Button mode="gold" variant="outline">
					Outline Gold
				</Button>
				<Button mode="blue" variant="outline">
					Outline Blue
				</Button>
			</Section>

			<Section>
				<h2>Light Buttons</h2>
				<Button mode="light" variant="light"> 
					Light Light
				</Button>
				<Button mode="dark" variant="light">
					Light Dark
				</Button>
				<Button mode="gold" variant="light">
					Light Gold
				</Button>
				<Button mode="blue" variant="light">
					Light Blue
				</Button>
			</Section>
			<Section>
				<h2>Light Buttons</h2>
				<Button mode="light" variant="text" >
					Light Light
				</Button>
				<Button mode="dark" variant="text" >
					Light Dark
				</Button>
				<Button mode="gold" variant="text" >  
					Light Gold
				</Button>
				<Button mode="blue" variant="text" >
					Light Blue
				</Button>
			</Section>
		</PageWrapper>
	);
};

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export default BrandingPage;
