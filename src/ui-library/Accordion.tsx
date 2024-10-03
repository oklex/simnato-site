import { ReactElement, ReactNode } from 'react';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import styled, { css } from 'styled-components';
import { MODES, PALETTE } from '../theme';

export type AccordionItemType = {
	key: string;
	label: string | ReactNode;
	content: string | ReactNode;
};
type AccordionProps = {
	initialOpenedKey?: string;
	mode: MODES;
	background: 'glassy' | 'transparent';
	content: AccordionItemType[];
};

const ChevronIcon = styled.div<{ open: boolean }>`
	display: inline-block;
	margin-left: 10px;
	transition: transform 0.2s ease;
	transform: rotate(${({ open }) => (open ? '180deg' : '0deg')});
	font-size: 1.1rem;
	opacity: ${({ open }) => (open ? 1 : 0.5)};
`;

// Styled component for AccordionWrapper
const AccordionWrapper = styled.div<{
	background: 'glassy' | 'transparent';
	mode: MODES;
}>`
	border-radius: 15px;
	border: solid 1px;
	border-color: ${({ mode }) => {
		switch (mode) {
			case 'light':
				return PALETTE.mono.near_white;
			case 'dark':
				return PALETTE.mono.dark;
			case 'gold':
				return PALETTE.gold.main;
			case 'blue':
				return PALETTE.blue.main;
			default:
				'transparent';
		}
	}};
	${({ background }) =>
		background === 'glassy'
			? css`
					background: rgba(255, 255, 255, 0.5);
					backdrop-filter: blur(10px);
			  `
			: css`
					background: transparent;
			  `};
`;

// Styled component for AccordionButton
const AccordionButton = styled(DisclosureButton)<{ mode: MODES }>`
	cursor: pointer;
	background: transparent;
	border: none;
	color: inherit;
	padding: 20px;
	width: 100%;
	display: flex;
	${({ mode }) => {
		switch (mode) {
			case 'light':
				return css`
					color: ${PALETTE.mono.near_white};
				`;
			case 'dark':
				return css`
					color: ${PALETTE.mono.dark};
				`;
			case 'gold':
				return css`
					color: ${PALETTE.gold.main};
				`;
			case 'blue':
				return css`
					color: ${PALETTE.blue.main};
				`;
			default:
				return '';
		}
	}}
`;

// Styled component for AccordionPanel
const AccordionPanel = styled(DisclosurePanel)<{ mode: MODES }>`
	padding: 0px 20px;
	margin: 0px 10px 20px;
	${({ mode }) => {
		switch (mode) {
			case 'light':
				return css`
					color: ${PALETTE.mono.main};
				`;
			case 'dark':
				return css`
					color: ${PALETTE.mono.near_white};
				`;
			case 'gold':
				return css`
					color: ${PALETTE.gold.dark};
				`;
			case 'blue':
				return css`
					color: ${PALETTE.blue.light};
				`;
			default:
				return '';
		}
	}}
`;

export const Accordion = ({
	initialOpenedKey,
	mode = 'light',
	background = 'transparent',
	content,
}: AccordionProps): ReactElement => {
	return (
		<AccordionWrapper background={background} mode={mode}>
			{content.map((item) => (
				<Disclosure
					id={item.key}
					key={item.key}
					as="div"
					defaultOpen={item.key === initialOpenedKey} // Open the selected item initially
				>
					{({ open }) => (
						<>
							<AccordionButton mode={mode}>
								{item.label}
								<ChevronIcon open={open}>▼</ChevronIcon>
							</AccordionButton>
							<AccordionPanel mode={mode}>{item.content}</AccordionPanel>{' '}
						</>
					)}
				</Disclosure>
			))}
		</AccordionWrapper>
	);
};
