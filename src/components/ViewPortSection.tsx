import { ReactElement, ReactNode, useContext, useRef } from 'react';
import styled, { css } from 'styled-components';

import { NavThemeContext } from '@context/navTheme';
import { COLORS, GRADIENTS } from '@src/theme';
import { Div } from '@src/ui-library';

export const RADIUS = 16;

type GradientDirectionsType = 'to bottom' | 'to right' | 'to left';
type DarkSectionType = {
	id: string;
	gradientDirection?: GradientDirectionsType;
	children: ReactNode | null;
	mode?: 'dark' | 'light' | 'mono';
};

export const ViewPortSection = ({
	id,
	gradientDirection,
	children,
	mode = 'dark',
}: DarkSectionType): ReactElement => {
	const { initializeRef } = useContext(NavThemeContext);
	const paddingTopRef = useRef<HTMLDivElement | null>(null);
	const paddingBottomRef = useRef<HTMLDivElement | null>(null);

	const trackRefCallback = (instance: HTMLDivElement | null) => {
		if (instance && mode === 'dark') initializeRef(id, { current: instance });
	};

	const negativeMargin =
		(paddingTopRef.current?.clientHeight ?? 0) +
		(paddingBottomRef.current?.clientHeight ?? 0);

	return (
		<TrackWrapper className="track-wrapper" ref={trackRefCallback}>
			<MaskTop className="mask-top" ref={paddingTopRef}>
				<PaddingBar vertical="top" />
				<Div flex justifyContent="between">
					<CornerSvg direction="top-left" />
					<CornerSvg direction="top-right" />
				</Div>
			</MaskTop>
			<MaskBottom className="mask-bottom" ref={paddingBottomRef}>
				<Div flex justifyContent="between">
					<CornerSvg direction="bottom-left" />
					<CornerSvg direction="bottom-right" />
				</Div>
				<PaddingBar vertical="bottom" />
			</MaskBottom>
			<CustomSection
				className="custom-section"
				gradientDirection={gradientDirection}
				negMargin={negativeMargin}
				mode={mode}
			>
				{children}
			</CustomSection>
		</TrackWrapper>
	);
};

// the track contains the full height of the content
const TrackWrapper = styled.div`
	margin-bottom: -1px;
	padding-left: 9px;
	padding-right: 9px;
	display: relative;
`;

const MaskTop = styled.div`
	position: sticky;
	top: 0px;
	left: 0px;
	z-index: 9;
	width: 100%;

	max-height: calc(100dvh - ${RADIUS * 2});
	pointer-events: none;
	overflow: hidden;
`;
const MaskBottom = styled.div`
	position: sticky;
	top: calc(100dvh - ${RADIUS * 2}px);
	left: 0px;
	z-index: 9;
	width: 100%;

	max-height: calc(100dvh - ${RADIUS * 2}px);
	pointer-events: none;
	overflow: hidden;
`;

const CustomSection = styled.div<{
	negMargin: number;
	gradientDirection?: GradientDirectionsType;
	mode?: 'dark' | 'light' | 'mono';
}>`
	background: linear-gradient(
		${({ gradientDirection }) => gradientDirection ?? 'to bottom'},
		${({ mode }) =>
			mode === 'light'
				? GRADIENTS.silver
				: mode === 'dark'
				? GRADIENTS.main
				: '#fff 0%, #fff 100%'}
	);
	margin-top: -${({ negMargin }) => negMargin}px;
	border-top: solid 1px ${COLORS.background};
	border-bottom: solid 1px ${COLORS.background};
	margin-left: 1px;
	margin-right: 1px;
	padding: ${RADIUS * 2}px ${RADIUS}px;
	overflow: hidden;
`;

const PaddingBar = styled.div<{ vertical: 'top' | 'bottom' }>`
	height: ${RADIUS}px;

	${({ vertical }) =>
		vertical === 'top'
			? css`
					margin-top: -1px;
					border-top: solid 1px ${COLORS.background};
			  `
			: css`
					margin-bottom: -1px;
					border-bottom: solid 1px ${COLORS.background};
			  `}
	background-color: ${COLORS.background};
	overflow: hidden;
`;
const CornerSvg = ({
	direction,
}: {
	direction: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}): ReactElement => {
	const rotation = (() => {
		switch (direction) {
			case 'top-left':
				return 0;
			case 'top-right':
				return 90;
			case 'bottom-left':
				return -90;
			case 'bottom-right':
				return -180;
		}
	})();
	const vertical: 'top' | 'bottom' = direction.split('-')[0] as any;
	const horizontal: 'left' | 'right' = direction.split('-')[1] as any;
	const margin = (() => {
		const marginArray = ['0', '0', '0', '0'];
		if (vertical === 'top') marginArray[0] = '-0.5px';
		if (horizontal === 'right') marginArray[1] = '-0.5px';
		if (vertical === 'bottom') marginArray[2] = '-0.5px';
		if (horizontal === 'left') marginArray[3] = '-0.5px';
		return marginArray.join(' ');
	})();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={RADIUS}
			height={RADIUS}
			viewBox={`0 0 ${RADIUS} ${RADIUS}`}
			fill={COLORS.background}
			transform={`rotate(${rotation}, 0, 0)`}
			style={{ margin, overflow: 'hidden' }}
		>
			<path
				stroke={`transparent`}
				strokeWidth={1}
				d="M-0.000487161 -0.000976562H19.9995C4.11936 0.0123475 -0.00296934 4.64167 -0.000487161 19.999V-0.000976562Z"
			/>
		</svg>
	);
};
