import React from "react";
import styled from "styled-components";

interface SpacerProps {
  size?: string | number; // Single prop for both height and width if provided
  height?: string | number; // Specific height control
  width?: string | number; // Specific width control
  inline?: boolean; // To control if the spacer is inline (useful in inline elements)
}

// Styled component to control space
const StyledSpacer = styled.div<{
  size?: string | number;
  height?: string | number;
  width?: string | number;
  inline?: boolean;
}>`
  display: ${({ inline }) => (inline ? "inline-block" : "block")};
  width: ${({ size, width }) => (width ? width : size ? size : "auto")};
  height: ${({ size, height }) => (height ? height : size ? size : "auto")};
  flex-shrink: 0; // Ensure spacer doesn't collapse in flex containers
`;

export const Spacer: React.FC<SpacerProps> = ({
  size,
  height = '1rem',
  width,
  inline = false,
}) => {
  return (
    <StyledSpacer size={size} height={height} width={width} inline={inline} />
  );
};
