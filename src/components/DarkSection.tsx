import {
	ReactElement,
	ReactNode,
	Ref,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import styled, { css } from 'styled-components';

import { NavThemeContext } from '@context/navTheme';
import { useScrollPosition } from '@stores/useScrollPosition';
import { COLORS, GRADIENTS } from '@src/theme';
import { Div } from '@src/ui-library';

const RADIUS = 14;

type DarkSectionType = {
	id: string;
	children: ReactNode | null;
};

export const DarkSection = ({
	id,
	children,
}: DarkSectionType): ReactElement => {
	const { initializeRef } = useContext(NavThemeContext);
	const paddingTopRef = useRef<HTMLDivElement | null>(null);
	const paddingBottomRef = useRef<HTMLDivElement | null>(null);
	const [trackHeight, setTrackHeight] = useState<number | null>(null);

	const trackRefCallback = (instance: HTMLDivElement | null) => {
		if (instance) initializeRef(id, { current: instance });
	};

	const negativeMargin =
		(paddingTopRef.current?.clientHeight ?? 0) +
		(paddingBottomRef.current?.clientHeight ?? 0);

	return (
		<TrackWrapper
			className="track-wrapper"
			ref={trackRefCallback}
			height={trackHeight}
		>
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

			<CustomSection className="custom-section" negMargin={negativeMargin}>
				{children}
			</CustomSection>
		</TrackWrapper>
	);
};

// the track contains the full height of the content
const TrackWrapper = styled.div<{ height: number }>`
	height: ${({ height }) => `${height - RADIUS}px`};
	margin-bottom: -1px;
	display: relative;
`;

const MaskTop = styled.div`
	position: sticky;
	top: 0px;
	left: 0px;
	z-index: 9;

	max-height: calc(100vh - 26px);
	pointer-events: none;
	overflow-y: hidden;
`;
const MaskBottom = styled.div`
	position: sticky;
	/* height: 0px; // counter with neg margin */
	top: calc(100vh - 20px - 16px);
	left: 0px;
	z-index: 9;

	max-height: calc(100vh - 26px);
	pointer-events: none;
	overflow-y: hidden;
`;

const CustomSection = styled.div<{ negMargin: number }>`
	background: linear-gradient(to bottom, ${GRADIENTS.main});
	margin-top: -${({ negMargin }) => negMargin}px;
	border-top: solid 1px ${COLORS.background};
	border-bottom: solid 1px ${COLORS.background};
	margin-left: 1px;
	margin-right: 1px;
	overflow: hidden;
`;

const PaddingBar = styled.div<{ vertical: 'top' | 'bottom' }>`
	height: ${RADIUS}px; // the sweet spot is 25px

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
