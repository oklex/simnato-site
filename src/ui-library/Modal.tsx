import { ReactNode, useEffect, useState, useRef, MouseEvent } from 'react';
import { rgba } from 'polished';
import { createPortal } from 'react-dom';
import styled, { css, keyframes } from 'styled-components';
import { COLORS, PALETTE } from '@src/theme';
import { fadeIn, fadeOut, slideIn, slideOut } from '@src/keyframeAnimations';

export const BREAKPOINTS = {
	xs: '320px',
	sm: '576px',
	md: '720px',
	desktop: '992px',
	desktopLg: '1200px',
};

type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'full';

export const Modal = ({
	isOpen,
	size = 'md',
	onClose,
	children,
}: {
	isOpen: boolean;
	size?: ModalSize;
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
		if (isOpen) {
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
	}, [isOpen, renderModal]);

	const onClickHandler = (e: MouseEvent<HTMLDivElement>): void => {
		if ((e.target as HTMLDivElement).contains(modalBgRef.current)) {
			onClose();
		}
	};

	if (!containerElement || !portalRoot || !renderModal) return null;

	return createPortal(
		<ModalBackground
			className="glassy"
			ref={modalBgRef}
			onClick={onClickHandler}
			isClosing={isClosing}
		>
			<ModalFrame size={size} isClosing={isClosing}>
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalFrame>
		</ModalBackground>,
		containerElement
	);
};

// Styled Components

const CloseButton = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;
	background: ${PALETTE.mono.light};
	color: ${PALETTE.mono.dark};
	border: none;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		transform: scale(1.1);
	}
`;

const ModalBackground = styled.div<{ isClosing: boolean }>`
	position: fixed;
	top: -15px;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
	width: 100%;
	height: 100dvh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s
		ease-in-out forwards;
`;

const ModalFrame = styled.div<{ size: ModalSize; isClosing: boolean }>`
	border: solid 1px ${rgba(PALETTE.mono.dark, 0.8)};
	border-radius: 12px;
	padding: 32px;
	background-color: ${COLORS.background};
	margin: 25px auto;
	animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.3s
		ease-in-out forwards;

	/* Size scaling based on the size prop */
	${({ size }) =>
		size === 'xs' &&
		css`
			width: ${BREAKPOINTS.xs};
		`}
	${({ size }) =>
		size === 'sm' &&
		css`
			width: ${BREAKPOINTS.sm};
		`}
  ${({ size }) =>
		size === 'md' &&
		css`
			width: ${BREAKPOINTS.md};
		`}
  ${({ size }) =>
		size === 'lg' &&
		css`
			width: ${BREAKPOINTS.desktop};
		`}
  ${({ size }) =>
		size === 'full' &&
		css`
			width: calc(100% - 50px);
			max-width: ${BREAKPOINTS.desktopLg};
		`}
  max-height: calc(100% - 50px);
	overflow-y: auto;

	/* Scrollbar Styling */
	scrollbar-width: thin;

	&::-webkit-scrollbar {
		width: 8px;
		border-radius: 12px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: ${PALETTE.mono.light};
		border-radius: 12px;
	}
`;
