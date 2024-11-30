import { ReactNode, useEffect, useState, useRef, MouseEvent } from 'react';
import { rgba } from 'polished';
import { createPortal } from 'react-dom';
import styled, { css, keyframes } from 'styled-components';
import { COLORS, PALETTE } from '@src/theme';
import { fadeIn, fadeOut, slideIn, slideOut } from '@src/keyframeAnimations';

export const Modal = ({
	isOpen,
	fullscreen,
	onClose,
	children,
}: {
	isOpen: boolean;
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
			<ModalFrame fullscreen={!!fullscreen} isClosing={isClosing}>
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalFrame>
		</ModalBackground>,
		containerElement
	);
};

const CloseButton = styled.button`
	position: sticky;
	top: 0;
	left: 100%;
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
	/* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); */
	/* transition: background-color 0.3s ease, transform 0.3s ease; */

	&:hover {
		/* background-color: ${PALETTE.mono.near_white}; */
		transform: scale(1.1);
	}
`;

const ModalBackground = styled.div<{ isClosing: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
	width: 100%;
	height: 100dvh;
	border-radius: 0px;
	/* background-color: ${rgba(PALETTE.mono.dark, 0.8)}; */
	display: flex;
	justify-content: center;
	overflow: hidden;
	animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s
		ease-in-out forwards;
`;

const ModalFrame = styled.div<{ fullscreen: boolean; isClosing: boolean }>`
	border: solid 1px ${rgba(PALETTE.mono.dark, 0.8)};
	border-radius: 12px;
	padding: 15px;
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

	/* Offset scrollbar to preserve border radius */
	scrollbar-width: thin; /* Firefox */
	/* clip sidebar */
	clip-path: inset(0 round 10px);
	-webkit-clip-path: inset(0 round 10px);

	&::-webkit-scrollbar {
		width: 8px;
		border-radius: 12px;
	}

	&::-webkit-scrollbar-track {
		background: transparent; /* Match background to hide track */
	}

	&::-webkit-scrollbar-thumb {
		background: ${PALETTE.mono.light}; /* Style the scrollbar */
		border-radius: 12px;
	}
`;
