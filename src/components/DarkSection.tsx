import { ReactElement, ReactNode, Ref, useContext } from 'react';
import styled from 'styled-components';

import { NavThemeContext } from '@src/context/navTheme';
import { Section } from '@src/ui-library';

type DarkSectionType = {
	id: string;
	children: ReactNode | ReactNode[] | null;
};

export const DarkSection = ({
	id,
	children,
}: DarkSectionType): ReactElement => {
	const { initializeRef } = useContext(NavThemeContext);
	const refCallback = (instance: HTMLDivElement | null) => {
		if (instance) initializeRef(id, { current: instance });
	};

	return (
		<div ref={refCallback}>
			<Section mode="dark" gradient={'vertical'}>
				{children}
			</Section>
		</div>
	);
};

const MaskWrapper = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;

	width: 100%;
	height: 100vh;
	padding: 0.8rem 0.9rem;
	pointer-events: none;
`;
