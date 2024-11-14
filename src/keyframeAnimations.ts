import { keyframes } from 'styled-components';

// Keyframes for animations
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const slideOut = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(20px); opacity: 0; }
`;

export const popIn = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
`;

export const popOut = keyframes`
    0% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`;