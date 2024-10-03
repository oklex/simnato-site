import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link, StyledText, Text } from '../ui-library';

export const RegistrationInfoSlice = (): ReactElement => {
	return (
		<div id="registration-info">
			<OuterContainer>
				<InnerContainer>
					<Cell align="right" widthPercentage={20}>
						<Text mode="dark">club registration</Text>
					</Cell>
					<Cell align="left" padding="0 0 0 10%">
						<Text mode="dark">free</Text>
					</Cell>
					<Cell widthPercentage={20}></Cell>
				</InnerContainer>

				<InnerContainer>
					<Cell align="right" widthPercentage={20}>
						<Text mode="dark">priority registration</Text>
						<Text mode="dark" size="sm" subtle>
							Oct. 28 - Dec 1st
						</Text>
					</Cell>
					<Cell align="left" padding="0 0 0 10%">
						<Text mode="dark">
							$125{'  '}
							<StyledText subtle size="sm" horizontalPadding="0.5rem">
								(overnight $230)
							</StyledText>
						</Text>
					</Cell>
					<Cell widthPercentage={20} align="center">
						<Link href="/registration">see more</Link>
					</Cell>
				</InnerContainer>

				<InnerContainer>
					<Cell align="right" widthPercentage={20}>
						<Text mode="dark">late registration</Text>
						<Text mode="dark" size="sm" subtle>
							Dec. 2nd - tba
						</Text>
					</Cell>
					<Cell align="left" padding="0 0 0 10%">
						<Text mode="dark">
							tba
							<StyledText subtle size="sm" horizontalPadding="0.5rem">
								(overnight tba)
							</StyledText>
						</Text>
					</Cell>
					<Cell widthPercentage={20} align="center">
						<Link href="/registration">see more</Link>
					</Cell>
				</InnerContainer>
			</OuterContainer>
		</div>
	);
};

const OuterContainer = styled.div`
	margin-top: 2rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
`;

const InnerContainer = styled.div`
	display: flex;
	justify-content: center; /* Centers items horizontally */
	flex-grow: 1;
	gap: 1rem;
`;

const Cell = styled.div<{
	widthPercentage?: number;
	align?: 'left' | 'center' | 'right';
	padding?: string;
}>`
	flex-grow: 1;
	width: ${({ widthPercentage }) => widthPercentage ?? 30}%;

	& > * {
		text-align: ${({ align }) => align || 'center'}; /* Text alignment */
		align-items: center; /* Vertically center content */
		align-self: center;
	}
	padding: ${({ padding }) => padding ?? '0.25rem'};
	box-sizing: border-box;
`;
