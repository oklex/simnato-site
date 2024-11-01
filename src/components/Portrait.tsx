import { ReactElement } from 'react';
import styled from 'styled-components';

export const Portrait = (): ReactElement => {
	return (
		<PortraitWrapper>
			<PortraitBox />
		</PortraitWrapper>
	);
};

const PortraitWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const PortraitBox = styled.div`
	min-height: 200px;
    height: auto;
	max-height: 300px;
    min-width: 100px;
	width: 100%;
	border-radius: 20px;
	background-color: white;
	border: lightgray 2px solid;
`;
