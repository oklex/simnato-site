import React, { FC } from "react";
import styled, { css } from "styled-components";

interface SVGWrapperProps {
  width?: string;
  center?: boolean;
  padding?: string;
}

const HaloUnderline: FC<SVGWrapperProps> = ({
  width = "100%",
  center = true,
  padding,
}) => {
  const aspectRatio = 108 / 1494; // Aspect ratio of the SVG
  const height =
    typeof width === "number"
      ? `${width * aspectRatio}px`
      : `calc(${width} * ${aspectRatio})`;

  return (
    <Wrapper width={width} height={height} center={center} padding={padding}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 1494 108"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M746.5 76.9336C1133.93 76.9336 1448 62.0717 1448 30.6042C1448 14.0782 1309.54 5.32443 1149.16 0.737305C1367.2 4.30805 1494 13.8446 1494 39.0316C1494 77.122 1159.56 108 747 108C334.443 108 0 77.122 0 39.0316C0 15.4823 115.433 5.61438 308.727 1.51216C162.699 6.28611 45 14.9649 45 30.6042C45 62.0717 359.072 76.9336 746.5 76.9336Z"
          fill="url(#paint0_linear_452_289)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_452_289"
            x1="747"
            y1="108"
            x2="746.969"
            y2="0.737221"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0B1957" />
            <stop offset="0.33" stopColor="#0B1957" />
            <stop offset="1" stopColor="#EEF0F5" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  width: string;
  height: string;
  center?: boolean;
  padding?: string;
}>`
  /* margin-top: calc(${({ width }) => width} / -32); */
  ${({ width, height }) =>
    css`
      width: ${width};
      height: ${height};
    `}
  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

export default HaloUnderline;
