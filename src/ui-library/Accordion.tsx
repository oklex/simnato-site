import { ReactElement, ReactNode, useState } from 'react';
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
	const [openKey, setOpenKey] = useState<string | null>(
		initialOpenedKey ?? null
	);

	const handleToggle = (key: string) => {
		setOpenKey(openKey === key ? null : key);
	};

	return (
		<AccordionWrapper background={background} mode={mode}>
			{content.map((item) => (
				<Disclosure key={item.key} as="div">
					<AccordionButton mode={mode} onClick={() => handleToggle(item.key)}>
						{item.label}
					</AccordionButton>
					{openKey === item.key && (
						<AccordionPanel mode={mode}>{item.content}</AccordionPanel>
					)}
				</Disclosure>
			))}
		</AccordionWrapper>
	);
};
