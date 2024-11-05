import {
	ReactNode,
	useEffect,
	useMemo,
	useRef,
	useState,
	MouseEvent,
} from 'react';
import { rgba } from 'polished';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import { COLORS, PALETTE } from '@src/theme';

export const Modal = ({
	active,
	fullscreen,
	onClose,
	children,
}: {
	active: boolean;
	fullscreen?: boolean;
	onClose: () => void;
	children: ReactNode;
}) => {
	const modelBgRef = useRef<HTMLDivElement | null>(null);
	const [portalRoot, setPortalRoot] = useState(null);
	const [containerElement, setContainerElement] = useState(null);

	useEffect(() => {
		const portal = document.getElementById('portal-root');
		const container = document.createElement('div');
		setPortalRoot(portal);
		setContainerElement(container);
	}, []);

	useEffect(() => {
		if (portalRoot && containerElement) {
			portalRoot.appendChild(containerElement);
			return () => {
				portalRoot.removeChild(containerElement);
			};
		}
	}, [portalRoot, containerElement]);

	useEffect(() => {
		if (active) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [active]);

	const onClickHandler = (e: MouseEvent<HTMLDivElement>): void => {
		if ((e.target as HTMLDivElement).contains(modelBgRef.current)) {
			if (onClose) onClose();
		}
	};

	return (
		containerElement &&
			createPortal(
				<>
					{active && (
						<ModalBackground ref={modelBgRef} onClick={onClickHandler}>
							<ModalFrame fullscreen={!!fullscreen}> {children}</ModalFrame>
						</ModalBackground>
					)}
				</>
			),
		containerElement
	);
};

// modal prop for fullscreen

const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;

	width: 100%;
	height: 100vh;
	background-color: ${rgba(PALETTE.mono.dark, 0.8)};
	display: flex;
	justify-content: center;
	overflow: hidden;
`;

const ModalFrame = styled.div<{ fullscreen: boolean }>`
	border-radius: 12px;
	background-color: ${COLORS.background};
	margin: 25px auto;
	${({ fullscreen }) =>
		fullscreen
			? css`
					width: 100%;
					height: 100%;
			  `
			: css`
					width: 640px;
					max-height: calc(100% - 50px);
			  `}
	overflow-y: scroll;
`;
