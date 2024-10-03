import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Container, Div, Header, Link, StyledText, Text } from '../ui-library';
import useScreenSize from '../stores/useScreenSize';

export const RegistrationInfoSlice = (): ReactElement => {
	const { width, height, isMobile } = useScreenSize();

	if (isMobile)
		return (
			<div id="registration-info">
				<Container maxWidth={400}>
					<Div flex justifyContent="between" margin="1rem 0rem">
						<Div gap="0.9rem">
							<Header level={5} mode="dark">
								Club Registration
							</Header>
							<Text mode="dark">free</Text>
						</Div>
						<Link href="/registration?ackey=club">see more</Link>
					</Div>
					<Div flex justifyContent="between" margin="1rem 0rem">
						<Div gap="0.9rem">
							<Header level={5} mode="dark">
								Priority Registration
							</Header>
							<Text mode="dark">
								$125{'  '}
								<StyledText subtle size="sm" horizontalPadding="0.5rem">
									(overnight $230)
								</StyledText>
							</Text>
						</Div>
						<Link href="/registration?ackey=priority">see more</Link>
					</Div>
					<Div flex justifyContent="between" margin="1rem 0rem">
						<Div gap="0.5rem">
							<Header level={5} mode="dark">
								Independent Registration
							</Header>
							<Text mode="dark">
								tba
								<StyledText subtle size="sm" horizontalPadding="0.5rem">
									(overnight tba)
								</StyledText>
							</Text>
						</Div>
						<Link href="/registration?ackey=independent">see more</Link>
					</Div>
				</Container>
			</div>
		);

	return (
		<div id="registration-info">
			<OuterContainer>
				<InnerContainer>
					<Cell align="right" widthPercentage={20}>
						<Header level={6} mode="dark">
							Club Registration
						</Header>
					</Cell>
					<Cell align="left" padding="0 0 0 10%">
						<Text mode="dark">free</Text>
					</Cell>
					<Cell widthPercentage={20}></Cell>
				</InnerContainer>

				<InnerContainer>
					<Cell align="right" widthPercentage={20}>
						<Header level={6} mode="dark">
							Priority Registration
						</Header>
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
						<Link href="/registration?ackey=priority">see more</Link>
					</Cell>
				</InnerContainer>

				<InnerContainer>
					<Cell align="right" widthPercentage={20}>
						<Header level={6} mode="dark">
							Independent Registration
						</Header>
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
						<Link href="/registration?ackey=independent">see more</Link>
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
