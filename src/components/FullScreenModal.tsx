import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FullScreenModal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<Overlay>
			<ModalContent>
				{/* <CloseButton onClick={onClose}>×</CloseButton> */}
				{children}
			</ModalContent>
		</Overlay>,
		document.getElementById('fullscreen-modal-root') // Ensure this exists in your app
	);
};

// Styled-components
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

const ModalContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background: #fff;
	overflow-y: auto;
	padding: 20px;
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

export default FullScreenModal;
