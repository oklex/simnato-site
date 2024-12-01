import React, { ReactElement, ReactNode, useEffect } from 'react';
import styled from 'styled-components';

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
	SplitScreen,
	SubContainer,
	Button,
} from '@ui-library';
import { Banner } from '@src/components/Banner';
import dayjs from 'dayjs';
import CountdownSlice from '@slices/countdownSlice';
import StarMarker from '@assets/starMarkers';

export const ConferencePage = (): ReactElement => {
	return (
		<div>
			<Container center>
				<Spacer height={'calc(10vh + 5rem)'} />
				<Div flex justifyContent="center">
					<StarMarker type="gold" />
				</Div>
				<CountdownSlice />
				<Container>
					<Div flex justifyContent="center" margin="24px 0px 0px">
						<Button href="/registration" variant="primary" mode="gold">
							<Header level={5}>Register Now</Header>
						</Button>
					</Div>
				</Container>
				<Spacer />
				<NarrowContainer>
					<Div padding="30px 0px">
						<Header level={6} mode="gold" center>
							March 7th - 8th, 2025
						</Header>
						<Header level={4} mode="dark" center>
							Wilson School of Design
						</Header>
						<Spacer height={'0.5rem'} />
						<Text mode="dark" subtle align="center">
							5600 Kwantlen St,
							<br />
							Richmond, BC V6X 3V8
							<br />
							March 7th - 8th, 2025
						</Text>
					</Div>
					<SplitScreen>
						<Div padding="30px 0px">
							<Header level={5} mode="dark" center>
								Saturday March 7th
							</Header>
							<Spacer />
							<Text mode="dark" subtle align="center">
								<TimeBlock
									day={1}
									time="8:00 am — 8:30 am"
									label="Registration"
								/>
								<TimeBlock
									day={1}
									time="8:30 am — 9:00 am"
									label="Opening Ceremony"
								/>
								<TimeBlock
									day={1}
									time="9:00 am — 12:00 pm"
									label="Crisis in Session"
								/>
								<TimeBlock
									day={1}
									time="12:00 pm — 1:20 pm "
									label="Lunch Break"
								/>
								<TimeBlock
									day={1}
									time="1:30 pm — 5:30 pm"
									label=" Crisis in Session"
								/>
							</Text>
						</Div>
						<Div padding="30px 0px">
							<Header level={5} mode="dark" center>
								Sunday March 8th
							</Header>
							<Spacer />
							<Text mode="dark" subtle align="center">
								<TimeBlock
									day={1}
									time="8:30 am — 12:00 pm"
									label="Crisis in Session"
								/>
								<TimeBlock
									day={1}
									time="12:00 pm — 1:20 pm "
									label="Lunch Break"
								/>
								<TimeBlock
									day={1}
									time="1:30 pm — 4:30 pm"
									label=" Crisis in Session"
								/>
								<TimeBlock day={1} time="4:30 pm — 5:00 pm" label="Break" />
								<TimeBlock
									day={1}
									time="5:00 pm — 6:00 pm"
									label="Closing Ceremony"
								/>
							</Text>
						</Div>
					</SplitScreen>
					<Div width="100%">
						<Banner type="neutral">Some details are prone to change</Banner>
					</Div>
				</NarrowContainer>
			</Container>
		</div>
	);
};

const TimeBlock = ({
	time,
	label,
	day,
}: {
	time: string;
	label: string;
	day: 1 | 2;
}): ReactNode => {
	// experimentally dynamic based on current time too
	const [status, setStatus] = React.useState<'present' | 'past' | 'future'>(
		'future'
	);
	useEffect(() => {
		const baseDate = day === 1 ? '2025-03-07' : '2025-03-08';
		if (!time.includes('—')) {
			console.error(
				`Invalid time format for "${time}". Expected an em dash (—).`
			);
			return;
		}
		const [start, end] = time
			.split('—')
			.map((t) => dayjs(`${baseDate} ${t.trim()}`, 'YYYY-MM-DD h:mm a'));

		const now = dayjs();
		if (now.isBefore(start)) setStatus('future');
		else if (now.isAfter(end)) setStatus('past');
		else setStatus('present');
		console.log('useEffect timeblock status', status, { start, end, now });
	}, [time]);

	return (
		<StyledText
			mode={
				status === 'future' ? 'dark' : status === 'past' ? 'silver' : 'blue'
			}
		>
			<TimeItem>
				<span>{time} :</span>
				<span>{label}</span>
			</TimeItem>
		</StyledText>
	);
};

const TimeItem = styled.span`
	display: flex;
	gap: 0.5rem;
	& > span {
		flex-grow: 1;
		width: 50%;
		&:first-child {
			text-align: end;
		}
		&:nth-child(2) {
			text-align: start;
		}
	}
`;

export default ConferencePage;
