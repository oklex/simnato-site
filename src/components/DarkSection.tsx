import {
	ReactElement,
	ReactNode,
	Ref,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import styled from 'styled-components';

import { NavThemeContext } from '@context/navTheme';
import { Section } from '@ui-library';
import { useScrollPosition } from '@stores/useScrollPosition';

type DarkSectionType = {
	id: string;
	children: ReactNode | ReactNode[] | null;
};

export const DarkSection = ({
	id,
	children,
}: DarkSectionType): ReactElement => {
	const { initializeRef } = useContext(NavThemeContext);
	const ref = useRef<HTMLDivElement | null>(null);
	const { scrollY } = useScrollPosition();
	const [scrollOffset, setScrollOffset] = useState<number | null>(null);

	const refCallback = (instance: HTMLDivElement | null) => {
		if (instance) {
			initializeRef(id, { current: instance });
			ref.current = instance;
		}
	};

	useEffect(() => {
		if (ref.current) setScrollOffset(ref.current.getBoundingClientRect().top);
	}, [ref, scrollY]);

	return (
		<TrackWrapper ref={refCallback}>
			<MaskWrapper mode="dark" gradient={'vertical'}>
				{children}
			</MaskWrapper>
		</TrackWrapper>
	);
};

// the track contains the full height of the content
const TrackWrapper = styled.div``;

const MaskWrapper = styled(Section)`
	position: sticky;
	top: 0px;
	left: 0px;

	width: 100%;
	height: 100vh;
	padding: 0.8rem 0.9rem;
	pointer-events: none;
`;

const Mask = styled.div<{ '-invHeight': number }>`
	overflow-y: hidden;
`;
