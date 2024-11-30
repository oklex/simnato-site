import useScreenSize from "@src/stores/useScreenSize";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const FullScreenModal = ({ isOpen, onClose, children }) => {
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
      onAnimationEnd={() => !isOpen && setShouldRender(false)}
    >
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    document.getElementById("fullscreen-modal-root")
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

const Overlay = styled.div<{ isOpen: boolean; isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? `100vw`: `calc(100vw + 20px)`)};
  height: 100vh;
  border-radius: 0px;
  background-color: white;
  position: fixed;
  top: 0;
  left: ${({ isMobile }) => (isMobile ? 0 : `-20px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: ${({ isOpen }) => (isOpen ? FadeIn : FadeOut)} 0.2s ease-in-out
    forwards;
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
