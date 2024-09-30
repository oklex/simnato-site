import styled, { css } from 'styled-components';

// Generic responsive container inside the full-width section
export const Container = styled.div<{ center?: boolean }>`
	max-width: 1200px;
	padding: 20px 20px;
	margin-left: auto;
	margin-right: auto;
	${({ center }) =>
		center &&
		css`
			display: flex;
			flex-direction: column;
			justify-content: center;
		`}
`;
