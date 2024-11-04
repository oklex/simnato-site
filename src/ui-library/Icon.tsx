import React, { MouseEvent, KeyboardEvent, FC } from 'react';
import styled, { css } from 'styled-components';

import type { StyledIcon } from '@styled-icons/styled-icon';

import { Close } from '@styled-icons/ionicons-outline/Close';
import { Circle } from '@styled-icons/boxicons-solid/Circle';
import { CurrencyDollar } from '@styled-icons/bootstrap/CurrencyDollar';
import { PinDrop } from '@styled-icons/material/PinDrop';
import { Restaurant } from '@styled-icons/material/Restaurant';
import { Event } from '@styled-icons/material-outlined/Event';
import { Email } from '@styled-icons/material-outlined/Email';
import { ErrorAlt } from '@styled-icons/boxicons-regular/ErrorAlt';
import { ExternalLinkOutline } from '@styled-icons/evaicons-outline/ExternalLinkOutline';
import { CalendarEvent } from '@styled-icons/boxicons-regular/CalendarEvent';
import { ChevronDown } from '@styled-icons/boxicons-solid/ChevronDown';
import { ChevronUp } from '@styled-icons/boxicons-solid/ChevronUp';
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { Facebook } from '@styled-icons/simple-icons/Facebook';
import { Gavel } from '@styled-icons/fluentui-system-filled/Gavel';
import { Linkedin } from '@styled-icons/remix-line/Linkedin';
import { Presenter } from '@styled-icons/fluentui-system-filled/Presenter';
import { Plus } from '@styled-icons/heroicons-solid/Plus';
import { Minus } from '@styled-icons/boxicons-regular/Minus';
import { Youtube } from '@styled-icons/bootstrap/Youtube';

import { Direction } from '@styled-icons/entypo/Direction';
import { OpenBook } from '@styled-icons/entypo/OpenBook';

import { Guide } from '@styled-icons/remix-line/Guide';

import { PALETTE, MODES } from '@src/theme';

export const ICONS = {
	'chevron-up': ChevronUp,
	'chevron-down': ChevronDown,
	calendar: CalendarEvent,
	circle: Circle,
	'checkmark-circle': CheckCircleFill,
	close: Close,
	direction: Direction,
	facebook: Facebook,
	instagram: InstagramWithCircle,
	email: Email,
	event: Event,
	food: Restaurant,
	gavel: Gavel,
	guide: Guide,
	link: ExternalLinkOutline,
	linkedin: Linkedin,
	map: PinDrop,
	minus: Minus,
	money: CurrencyDollar,
	openbook: OpenBook,
	presenter: Presenter,
	plus: Plus,
	warning: ErrorAlt,
	youtube: Youtube,
};
export type IconKey = keyof typeof ICONS;

type IconStyleWrapperProps = {
	className?: string;
	onClick?: (event: MouseEvent | KeyboardEvent<HTMLElement>) => unknown;
	role?: 'button';
	large?: true;
	spaceAfter?: true | string;

	mode: MODES;
};

const IconStyleWrapper = styled.span<IconStyleWrapperProps>`
	display: inline-block;
	font-size: 0;
	vertical-align: middle;
	${({ role }) => role === 'button' && 'cursor: pointer;'}

	line-height: ${({ large }) => (large ? '25px' : '2rem')};
	width: ${({ large }) => (large ? '25px' : '2rem')};

	${({ onClick }) =>
		onClick &&
		css`
			cursor: pointer;
		`}

	${({ spaceAfter }) =>
		spaceAfter === true
			? 'margin-right: 1rem;'
			: `margin-right: ${spaceAfter};`}

color: ${({ mode }) =>
		PALETTE[mode]?.main || PALETTE.mono.main}; /* Fallback to mono.main */

	svg {
		display: block;
	}
`;

export type IconProps = IconStyleWrapperProps & {
	icon: IconKey;
	title?: string;
};

const InnerIcon: FC<IconProps> = ({
	className,
	icon,
	onClick,
	title,
	role,
	spaceAfter,
	large,
	mode,
}: IconProps) => {
	const IconElement = ICONS[icon] as StyledIcon;

	return (
		<IconStyleWrapper
			className={className}
			large={large}
			onClick={onClick}
			onKeyPress={onClick}
			role={role}
			spaceAfter={spaceAfter}
			mode={mode}
		>
			<IconElement title={title} />
		</IconStyleWrapper>
	);
};

// Expose instance of StyledComponent for extendability
export const Icon = styled(InnerIcon)``;