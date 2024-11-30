import useScreenSize from '@src/stores/useScreenSize';
import React, { useState, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

interface ModalOptions {
	glassy?: boolean;
	hideClose?: boolean;
}
const defaultModalOptions = {
	glassy: false,
	hideClose: true,
};

type FullScreenModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	options: ModalOptions;
};

const FullScreenModal = ({
	isOpen,
	onClose,
	children,
	options = {},
}: FullScreenModalProps) => {
	const modalOptions = { ...defaultModalOptions, ...options };
	const { isMobile } = useScreenSize();
	const [shouldRender, setShouldRender] = useState(isOpen);

	useEffect(() => {
		if (isOpen) {
			setShouldRender(true);
		} else {
			const timer = setTimeout(() => setShouldRender(false), 200); // Match animation duration
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	// set-up a scroll or close button
	// <CloseButton onClick={onClose}>×</CloseButton>

	if (!shouldRender) return null; // Prevent rendering during fade-out

	return ReactDOM.createPortal(
		<Overlay
			isOpen={isOpen}
			isMobile={isMobile}
			glassy={!!options.glassy}
			onAnimationEnd={() => !isOpen && setShouldRender(false)}
		>
			<ModalContent>{children}</ModalContent>
		</Overlay>,
		document.getElementById('fullscreen-modal-root')
	);
};

// Define fade-in and fade-out animations
const FadeIn = keyframes`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
  100% {
    opacity: 0;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
`;

const Overlay = styled.div<{
	isOpen: boolean;
	isMobile: boolean;
	glassy: boolean;
}>`
	width: ${({ isMobile }) => (isMobile ? `100vw` : `calc(100vw + 20px)`)};
	height: 100vh;
	border-radius: 0px;
	${({ glassy }) => {
		if (glassy)
			return css`
				background: rgba(255, 255, 255, 0.31); /* Semi-transparent white */
				backdrop-filter: blur(15px); /* Frosted glass effect */
				-webkit-backdrop-filter: blur(15px);
				border: 1px solid rgba(255, 255, 255, 0.5);
				border-radius: 15px;
				box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

				opacity: 0; /* Start transparent */
				animation: glassyAppear 0.15s ease-out forwards;
			`;
		else
			return css`
				background-color: white;
			`;
	}}

	position: fixed;
	top: 0;
	left: ${({ isMobile }) => (isMobile ? 0 : `-20px`)};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	animation: ${({ isOpen }) => (isOpen ? FadeIn : FadeOut)} 0.2s ease-in-out
			forwards,
		${({ glassy }) => glassy && `glassyAppear 0.15s ease-out forwards`};
`;

const ModalContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	padding: 20px;
	background-color: transparent;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	background: transparent;
	border: none;
	font-size: 24px;
	font-weight: bold;
	cursor: pointer;
	color: #000;

	&:hover {
		color: #ff5c5c;
	}
`;

const glassyAppear = keyframes`
	0% {
	  opacity: 0; /* Invisible */
	  backdrop-filter: blur(0px); /* No blur */
	  -webkit-backdrop-filter: blur(0px);
	}
	100% {
	  opacity: 1; /* Fully visible */
	  backdrop-filter: blur(15px); /* Full blur */
	  -webkit-backdrop-filter: blur(15px);
	}
  `;

export default FullScreenModal;
