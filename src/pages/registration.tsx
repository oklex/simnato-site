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
import { useRouter } from 'next/router';
import useScreenSize from '../stores/useScreenSize';
import { ViewPortSection } from '@src/components/ViewPortSection';

export const RegistrationPage = (): ReactElement => {
	const { width, height, isMobile } = useScreenSize();
	const router = useRouter();
	const { query } = router;
	const accordionKey = query['ackey']
		? query['ackey'].toLocaleString().toLocaleLowerCase()
		: undefined;

	return (
		<div>
			<Section mode="dark">
				<Container center>
					<SubContainer>
						<Spacer height={'30vh'} />
						<Div flex justifyContent="center">
							<StarMarker type="dark" />
						</Div>
						<Header center level={1} mode="dark">
							<StyledText mode="dark">Registration Applications</StyledText>
						</Header>

						<Header center level={1} mode="dark">
							<StyledText subtle>now open by referral*</StyledText>
						</Header>
						<Spacer />
						<Text mode="dark" align="center">
							As a specialized experience for experienced delegates, we will be
							restricting access to delegates who fit each committee and role’s
							criteria. Successful applicants will be those who have mastered
							the basics of conventional Model UN.
						</Text>
					</SubContainer>
					<Spacer height={'35px'} />
					<Text subtle mode="dark" align="center">
						*By referral until Dec. 31st
					</Text>
					<Text subtle mode="dark" align="center">
						Open registration starting Jan 31st
					</Text>
				</Container>
			</Section>
			<Spacer height={'100px'} />

			<ViewPortSection id="registration-how-to" mode='light'>
				<Div>
					<Spacer height={'50px'} />
					<Header center level={3}>
						How it works
					</Header>
					<Spacer height={'50px'} />
				</Div>
			</ViewPortSection>

			<Container center>
				<Accordion
					mode="dark"
					background="glassy"
					content={GetAccordionItems(isMobile)}
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
	margin-left: auto;
	margin-right: auto;
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

const GetAccordionItems = (isMobile: boolean): AccordionItemType[] => [
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
