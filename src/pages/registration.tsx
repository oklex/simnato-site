import React, { ReactElement } from 'react';
import {
	Accordion,
	AccordionItemType,
	Container,
	Header,
	Section,
	Spacer,
	StyledText,
	Text,
	Div,
} from '../ui-library';
import styled from 'styled-components';
import StarMarker from '../assets/starMarkers';
import { PALETTE } from '../theme';
import { useRouter } from 'next/router';
import useScreenSize from '../stores/useScreenSize';

export const RegistrationPage = (): ReactElement => {
	const { width, height, isMobile } = useScreenSize();
	const router = useRouter();
	const { query } = router;
	const accordionKey = query['ackey']
		? query['ackey'].toLocaleString().toLocaleLowerCase()
		: undefined;

	const AccordionItems: AccordionItemType[] = [
		{
			key: 'club',
			label: (
				<Div
					flex
					flexDirection={isMobile ? 'col' : 'row'}
					width="100%"
					justifyContent="between"
				>
					<div>
						<Header level={6} mode="dark">
							<StyledText bold>Club Registration</StyledText>{' '}
							<StyledText size="md" subtle>
								(sponsor teachers optional)
							</StyledText>
						</Header>
					</div>
					<Text mode="dark">Opening Soon</Text>
				</Div>
			),
			content: <Text mode="dark">lorem ipsum</Text>,
		},
		{
			key: 'priority',
			label: (
				<Div
					flex
					flexDirection={isMobile ? 'col' : 'row'}
					width="100%"
					justifyContent="between"
				>
					<div>
						<Header level={6} mode="dark">
							<StyledText bold>Priority Registration</StyledText>{' '}
							<StyledText subtle>for registered clubs</StyledText>
						</Header>
					</div>
					<Text mode="dark">Oct. 28th</Text>
				</Div>
			),
			content: <Text mode="dark">lorem ipsum</Text>,
		},
		{
			key: 'independent',
			label: (
				<Div
					flex
					flexDirection={isMobile ? 'col' : 'row'}
					width="100%"
					justifyContent="between"
				>
					<div>
						<Header level={6} mode="dark">
							<StyledText bold>Independent Registration</StyledText>{' '}
							<StyledText subtle>for any and all delegates</StyledText>
						</Header>
					</div>
					<Text mode="dark">Dec. 1st</Text>
				</Div>
			),
			content: <Text mode="dark">lorem ipsum</Text>,
		},
	];

	return (
		<div>
			<Section mode="dark">
				<Container center>
					<SubContainer>
						<Spacer height={'30vh'} />
						<StarMarker type="gold" />
						<Header level={2} mode="dark">
							<StyledText bold mode="gold">
								Priority Registration
							</StyledText>{' '}
							<StyledText subtle>
								available
								<br />
								exclusively for registered clubs
							</StyledText>
						</Header>
					</SubContainer>
					<Spacer />
					<Text subtle mode="dark">
						Opens Oct. 28 — until Dec. 1st
					</Text>
					<Spacer height={'10vh'} />
				</Container>
			</Section>
			<Spacer height={'100px'} />

			<Container center>
				<Accordion
					mode="dark"
					background="glassy"
					content={AccordionItems}
					initialOpenedKey={accordionKey}
				/>
			</Container>
		</div>
	);
};

const SubContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	max-width: 650px;
`;

const InfoRow = styled.div`
	max-width: 850px;
	display: flex;
	justify-content: space-between;
	opacity: 0.9;

	& > * {
		white-space: nowrap; /* Prevents text from wrapping */
	}
`;

const DottedLine = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	&::after {
		content: '';
		flex: 1;
		border-bottom: 1px dotted #000; /* Adjust color as needed */
		margin: 0 10px; /* Adjust spacing between the items */
	}

	> * {
		white-space: nowrap; /* Prevents text from wrapping */
	}
`;

export default RegistrationPage;
