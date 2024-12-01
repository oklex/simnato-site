import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { Header, Text } from '@ui-library';
import Link from 'next/link';

dayjs.extend(duration);

const Countdown = () => {
	const targetDate = dayjs('2025-03-07');
	const registrationDate = dayjs('2025-01-01');
	const [remainingTime, setRemainingTime] = useState(calculateRemainingTime);
	const [registrationDays, setRegistrationDays] = useState(
		calculateRegistrationDays
	);

	useEffect(() => {
		const timer = setInterval(() => {
			setRemainingTime(calculateRemainingTime());
			setRegistrationDays(calculateRegistrationDays());
		}, 1000 * 60 * 60 * 24); // Update daily
		return () => clearInterval(timer); // Cleanup on unmount
	}, []);

	function calculateRemainingTime() {
		const today = dayjs().startOf("day");
		let months = 0;
		let current = today;
	
		// Calculate months remaining
		while (current.add(1, "month").isBefore(targetDate)) {
		  months++;
		  current = current.add(1, "month");
		}
	
		// Calculate remaining days after subtracting months
		const days = targetDate.diff(current, "day");
	
		return { months, days };
	  }
	
	  function calculateRegistrationDays() {
		const today = dayjs().startOf("day");
		const diff = registrationDate.diff(today, "day");
		return Math.max(diff, 0); // Show 0 days if registration is already open
	  }

	const { months, days } = remainingTime;
	const showCountdown = months > 0 || days > 0;

	return (
		<CountdownWrapper>
			<Header level={1} mode="dark" center>
				{showCountdown &&
					`${months} month${months !== 1 ? 's' : ''} and ${days} day${
						days !== 1 ? 's' : ''
					}`}
			</Header>
			<Header level={2} mode="dark" center>
				{showCountdown ? 'until SimNATO' : `It's time!`}
			</Header>
			<Text mode="dark" align="center" subtle>
				{registrationDays > 0
					? `${registrationDays} day${
							registrationDays !== 1 ? 's' : ''
					  } until open registration on January 1st, 2025.`
					: 'Registion is Open!'}
			</Text>
		</CountdownWrapper>
	);
};

export default Countdown;

// Styled component
const CountdownWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	text-align: center;
`;
