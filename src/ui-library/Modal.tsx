import { ReactNode, useEffect, useState, useRef, MouseEvent } from 'react';
import { rgba } from 'polished';
import { createPortal } from 'react-dom';
import styled, { css, keyframes } from 'styled-components';
import { COLORS, PALETTE } from '@src/theme';
import { fadeIn, fadeOut, slideIn, slideOut } from '@src/keyframeAnimations';

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
	const modalBgRef = useRef<HTMLDivElement | null>(null);
	const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
	const [containerElement, setContainerElement] = useState<HTMLElement | null>(
		null
	);
	const [windowLoaded, setWindowLoaded] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [renderModal, setRenderModal] = useState(false);

	useEffect(() => {
		setWindowLoaded(true);
	}, []);

	useEffect(() => {
		if (windowLoaded) {
			const portal = document.getElementById('portal-root');
			if (portal) {
				const container = document.createElement('div');
				setPortalRoot(portal);
				setContainerElement(container);
			}
		}
	}, [windowLoaded]);

	useEffect(() => {
		if (portalRoot && containerElement) {
			portalRoot.appendChild(containerElement);
			return () => {
				if (portalRoot && containerElement) {
					portalRoot.removeChild(containerElement);
				}
			};
		}
	}, [portalRoot, containerElement]);

	useEffect(() => {
		if (active) {
			setRenderModal(true); // Start rendering the modal
			document.body.style.overflow = 'hidden';
			setIsClosing(false);
		} else if (renderModal) {
			setIsClosing(true); // Trigger exit animation
			setTimeout(() => {
				setRenderModal(false); // Unmount modal after animation
				document.body.style.overflow = ''; // Reset overflow
				setIsClosing(false); // Reset isClosing state
			}, 300); // Duration of animation in ms
		}
	}, [active, renderModal]);

	const onClickHandler = (e: MouseEvent<HTMLDivElement>): void => {
		if ((e.target as HTMLDivElement).contains(modalBgRef.current)) {
			onClose();
		}
	};

	if (!containerElement || !portalRoot || !renderModal) return null;

	return createPortal(
		<ModalBackground
			ref={modalBgRef}
			onClick={onClickHandler}
			isClosing={isClosing}
		>
			<ModalFrame fullscreen={!!fullscreen} isClosing={isClosing}>
				{children}
			</ModalFrame>
		</ModalBackground>,
		containerElement
	);
};

const ModalBackground = styled.div<{ isClosing: boolean }>`
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
	animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s
		ease-in-out forwards;
`;

const ModalFrame = styled.div<{ fullscreen: boolean; isClosing: boolean }>`
	border-radius: 12px;
	background-color: ${COLORS.background};
	margin: 25px auto;
	animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.3s
		ease-in-out forwards;

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
