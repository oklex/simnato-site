import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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
	NarrowContainer,
	Button,
} from '@ui-library';
import StarMarker from '@assets/starMarkers';
import useScreenSize from '@stores/useScreenSize';
import { ViewPortSection } from '@src/components/ViewPortSection';
import { SubContainer } from '@src/ui-library/Section';
import FullScreenModal from '@src/components/FullScreenModal';

export const RegistrationPage = (): ReactElement => {
	const { width, height, isMobile } = useScreenSize();
	const { query } = useRouter();
	const [showInfoModal, setShowInfoModal] = useState(false);

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
							<StyledText subtle>available by referral*</StyledText>
						</Header>
						<Spacer />
						<Text mode="dark" align="center">
							As a specialized experience for experienced delegates, we will be
							restricting early access to delegates who fit each committee and
							role’s criteria. Successful applicants will be those who have
							mastered the basics of conventional Model UN.
						</Text>
					</SubContainer>
					<Spacer height={'1rem'} />
					<Div flex justifyContent="center">
						<Div flex flexDirection="col" gap="12px">
							<Button
								variant="primary"
								mode="dark"
								href="https://form.jotform.com/243296810966265"
							>
								<Div padding="0 2rem">
									<Header center level={5}>
										Apply now, pay later
									</Header>
								</Div>
							</Button>
							{/* <Button variant="text" mode="light" onClick={() => setShowInfoModal(true)}>
								<Text align="center" mode="gold">
									learn how it works
								</Text>
							</Button> */}
						</Div>
					</Div>
					<Spacer />

					<Text subtle mode="dark" align="center">
						*By referral until Dec. 31st <br />
						Open registration starting Jan 1st
					</Text>
					<Spacer height={'35px'} />
				</Container>
			</Section>
			<Spacer height={'4rem'} />

			<NarrowContainer>
				<ViewPortSection id="registration-how-to" mode="light">
					<Div>
						<Spacer height={'2rem'} />
						<Header center level={3} mode="dark">
							How it works
						</Header>
						<Spacer height={'1.5rem'} />
					</Div>
					<Accordion
						background="transparent"
						mode="dark"
						content={[
							{
								key: 'key',
								label: (
									<Div width="100%">
										<Header level={6} mode="dark">
											How much does Early, Regular, and Late Registration cost?
										</Header>
									</Div>
								),
								content: (
									<>
										<Text mode="dark">
											All accepted Delegates will be charged a flat $125. This
											does not include overnight acoomodations. This fee will
											not change for Early or Late applicants.
										</Text>
									</>
								),
							},
						]}
					></Accordion>
					<Spacer />
					<Accordion
						background="transparent"
						mode="dark"
						content={[
							{
								key: 'key',
								label: (
									<Div width="100%">
										<Header level={6} mode="dark">
											When do we hear back on our application status?
										</Header>
									</Div>
								),
								content: (
									<>
										<Text mode="dark">
											Offers will be sent out at the end of the referral period,
											and then at the end of each month afterwards. Please allow
											at least 3-4 weeks to review your application
										</Text>
										<br />
										<Text mode="dark">
											Once sent an offer, you will have 72 hours to accept your
											role and pay.
										</Text>
									</>
								),
							},
						]}
					></Accordion>
					<Spacer />
					<Accordion
						background="transparent"
						mode="dark"
						content={[
							{
								key: 'key',
								label: (
									<Div width="100%">
										<Header level={6} mode="dark">
											How is this different from regular MUN registration?
										</Header>
									</Div>
								),
								content: (
									<>
										<Text mode="dark">
											As a specialized experience, not all delegates will be a
											good fit. As a result, staff reserve the right to either
											reject or put your application on hold to be considered at
											a later date.
										</Text>
										<br />
										<Text mode="dark">
											In addition, country choices will not be available for
											some committees, as the staff will reserve the right to
											assign a country that fits your profile.
										</Text>
									</>
								),
							},
						]}
					></Accordion>
					<Spacer />
					<Accordion
						background="transparent"
						mode="dark"
						content={[
							{
								key: 'key',
								label: (
									<Div width="100%">
										<Header level={6} mode="dark">
											Are position papers required?
										</Header>
									</Div>
								),
								content: (
									<>
										<Text mode="dark">
											All Delegates will be required to submit a position paper,
											though the format will differ per Committee. Every
											Committee will have their own version and format of
											position paper that Delegates must follow.
										</Text>
										<Text mode="dark">
											Upon completion, all Position Papers will be shared will
											all other Delegates prior to the start of SimNATO.
										</Text>
									</>
								),
							},
						]}
					></Accordion>
					<Spacer />
					<Accordion
						background="transparent"
						mode="dark"
						content={[
							{
								key: 'key',
								label: (
									<Div width="100%">
										<Header level={6} mode="dark">
											I think I'm ready but I don't have much experience?
										</Header>
									</Div>
								),
								content: (
									<>
										<Text mode="dark">
											Having been to large number of conferences, is no
											substitute for having developed your skills — and vice
											versa! If you have the experience and awards to suggest
											your competency, that's great. But taking gr.8 math 5
											times won't suddenly prepare you for AP Calculus, and so
											regardless of your experience we are open to learning more
											about you.
										</Text>
										<br />
										<Text mode="dark">
											Look out for fields on the applicaiton form where we ask
											about other relevant experience for individual skillsets.
											Elaborate as much you think you need to in these fields.
											Finally, if you know any of the staff, ask them for
											feedback and see if they are willing to give you a
											referral.
										</Text>
									</>
								),
							},
						]}
					></Accordion>
					<Spacer />
					<Accordion
						background="transparent"
						mode="dark"
						content={[
							{
								key: 'key',
								label: (
									<Div width="100%">
										<Header level={6} mode="dark">
											What do the awards look like?
										</Header>
									</Div>
								),
								content: (
									<Text mode="dark">
										While we will be making an effort to aknowledge uniquely
										positive contribution from indivdual delegates, however
										SimNATO will not be having Delegate awards!
									</Text>
								),
							},
						]}
					></Accordion>
					<Spacer />
					<Accordion
						background="transparent"
						mode="dark"
						content={[
							{
								key: 'key',
								label: (
									<Div width="100%">
										<Header level={6} mode="dark">
											What is the refund policy?
										</Header>
									</Div>
								),
								content: (
									<Text mode="dark">
										Delegates may request a refund for extenuating
										circumstances, to be determined at the discretion of the
										SimNATO logistics team. Eligible refunds may to cover up to
										50% of their registration fee, which will be payable after
										March 8th.
									</Text>
								),
							},
						]}
					></Accordion>
				</ViewPortSection>
			</NarrowContainer>

			<FullScreenModal
				isOpen={showInfoModal}
				onClose={() => setShowInfoModal(false)}
			>
				<Header level={4} mode="dark">
					Register
				</Header>
			</FullScreenModal>
		</div>
	);
};

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
