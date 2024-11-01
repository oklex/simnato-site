import styled, { css } from 'styled-components';

// Generic responsive container inside the full-width section
export const GenericContainer = styled.div<{
	center?: boolean;
	maxWidth?: number;
}>`
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

export const NarrowContainer = styled.div<{ size?: 'md' | 'sm' }>`
	padding: 0.6rem 1rem;
	width: calc(100% - 50px);
	margin-left: auto;
	margin-right: auto;

	/* Larger screens, subtract 440px, but max out at 1200px */
	@media (min-width: 769px) {
		max-width: 950px; /* Ensure it doesn't exceed 1200px */
	}
	${({ size }) =>
		size === 'sm' &&
		css`
			max-width: 640px !important;
		`}
`;
