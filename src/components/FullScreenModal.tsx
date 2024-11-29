import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FullScreenModal = ({ isOpen, onClose, children }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
	  setIsMounted(true);
	}, []);
  
	if (!isMounted || !isOpen) return null; // Ensure the modal renders only on the client
  
	return ReactDOM.createPortal(
		<Overlay className='glassy'>
			<ModalContent>
				{/* <CloseButton onClick={onClose}>×</CloseButton> */}
				{children}
			</ModalContent>
		</Overlay>,
		document.getElementById('fullscreen-modal-root') // Ensure this exists in your app
	);
};

const Overlay = styled.div`
	width: 100vw;
	border-radius: 0px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

const ModalContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
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
