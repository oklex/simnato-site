import React, { FC } from "react";
import styled, { css } from "styled-components";

interface ResizableSVGProps {
  scale: string | number;
  center?: boolean;
  padding?: string;
}

export const RichmunWreath: FC<ResizableSVGProps> = ({
  scale = "100px",
  center,
  padding,
}) => {
  const aspectRatio = 88 / 152; // Maintain aspect ratio
  const width =
    typeof scale === "number"
      ? scale * aspectRatio
      : `calc(${scale} * ${aspectRatio})`;

  return (
    <Wrapper center={center} padding={padding}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={scale}
        viewBox="0 0 88 152"
        fill="none"
      >
        <path
          d="M54.5311 0C61.3296 29.2756 58.5301 35.0483 47.7335 48.2429C36.7868 61.6213 37.4997 66.1392 42.9755 91.538C8.7058 64.0775 33.7774 39.1717 39.3768 35.0483C44.976 30.9246 53.7313 18.9673 54.5311 0Z"
          fill="url(#paint0_linear_4068_122)"
        />
        <path
          d="M18.7958 47.8308C18.7958 73.8079 20.3225 85.2103 42.7286 97.6761L59.5867 121.226C21.0797 110.29 -13.6522 99.6354 18.7958 47.8308Z"
          fill="url(#paint1_linear_4068_122)"
        />
        <path
          d="M0 94.012C7.89625 101.856 18.7958 119.61 53.1882 125.349C76.7385 129.279 82.8006 140.921 87.1806 151.739C72.8728 144.461 68.6343 140.476 39.9911 135.658C13.0149 128.111 2.3945 114.646 0 94.012Z"
          fill="#377376"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4068_122"
            x1="41.7497"
            y1="0"
            x2="41.7497"
            y2="91.538"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0DB08C" />
            <stop offset="1" stopColor="#4B969B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_4068_122"
            x1="32.7672"
            y1="47.8308"
            x2="32.7672"
            y2="121.226"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0DB08C" />
            <stop offset="0.9999" stopColor="#367476" />
            <stop offset="1" stopColor="#377376" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ center?: boolean; padding?: string }>`
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

export default RichmunWreath;
