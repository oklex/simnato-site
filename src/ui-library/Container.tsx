import styled, { css } from 'styled-components';

// Generic responsive container inside the full-width section
export const Container = styled.div<{ center?: boolean; maxWidth?: number }>`
	max-width: ${({ maxWidth }) => `${maxWidth ?? 1200}px`};
	padding-left: 1rem;
	padding-right: 1rem;
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
