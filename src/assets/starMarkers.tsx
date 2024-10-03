import React, { FC } from "react";
import styled, { css } from "styled-components";

interface ResizableSVGProps {
  type: "dark" | "gold" | "blue";
  height?: string | number;
  center?: boolean;
  padding?: string;
}

export const StarMarker: FC<ResizableSVGProps> = ({
  type,
  height = "35px",
  center,
  padding = "1rem 0px",
}) => {
  const aspectRatio = 83 / 80; // Aspect ratio of the SVG
  const width =
    typeof height === "number"
      ? height * aspectRatio
      : `calc(${height} * ${aspectRatio})`;

  if (type === "dark")
    return (
      <Wrapper center={center} padding={padding}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 83 80"
          fill="none"
        >
          <path
            d="M82.6491 35.9076C76.6505 37.3837 69.8144 39.4702 63.3847 43.4161C56.9425 47.1597 51.7494 52.7129 47.9224 59.9464C44.9595 65.5724 42.7878 72.2187 41.4926 79.752C40.1975 72.2187 38.0382 65.5724 35.0629 59.9464C31.2483 52.7129 26.0428 47.1472 19.613 43.4161C13.1709 39.4578 6.34547 37.382 0.348633 35.9076C21.2311 32.3574 36.8371 18.8379 41.4926 0.244141C46.1588 18.8379 61.7648 32.3574 82.6508 35.9076H82.6491Z"
            fill="url(#paint0_radial_197_720)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_197_720"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(41.4997 0.244141) rotate(90) scale(79.5078 82.3022)"
            >
              <stop stop-color="#28317F" />
              <stop offset="0.495" stop-color="#0B1957" />
              <stop offset="1" stop-color="#030B2E" />
            </radialGradient>
          </defs>
        </svg>
      </Wrapper>
    );

  if (type === "blue")
    return (
      <Wrapper center={center} padding={padding}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 83 80"
          fill="none"
        >
          <path
            d="M82.6491 35.9076C76.6505 37.3837 69.8144 39.4702 63.3847 43.4161C56.9425 47.1597 51.7494 52.7129 47.9224 59.9464C44.9595 65.5724 42.7878 72.2187 41.4926 79.752C40.1975 72.2187 38.0382 65.5724 35.0629 59.9464C31.2483 52.7129 26.0428 47.1472 19.613 43.4161C13.1709 39.4578 6.34547 37.382 0.348633 35.9076C21.2311 32.3574 36.8371 18.8379 41.4926 0.244141C46.1588 18.8379 61.7648 32.3574 82.6508 35.9076H82.6491Z"
            fill="url(#paint0_radial_197_733)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_197_733"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(41.4997 0.244141) rotate(90) scale(79.5078 82.3022)"
            >
              <stop stop-color="#E2E7FD" />
              <stop offset="0.5" stop-color="#B4BFEF" />
              <stop offset="1" stop-color="#28317F" />
            </radialGradient>
          </defs>
        </svg>
      </Wrapper>
    );

  if (type === "gold")
    return (
      <Wrapper center={center} padding={padding}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 83 80"
          fill="none"
        >
          <path
            d="M82.6491 35.9076C76.6505 37.3837 69.8144 39.4702 63.3847 43.4161C56.9425 47.1597 51.7494 52.7129 47.9224 59.9464C44.9595 65.5724 42.7878 72.2187 41.4926 79.752C40.1975 72.2187 38.0382 65.5724 35.0629 59.9464C31.2483 52.7129 26.0428 47.1472 19.613 43.4161C13.1709 39.4578 6.34547 37.382 0.348633 35.9076C21.2311 32.3574 36.8371 18.8379 41.4926 0.244141C46.1588 18.8379 61.7648 32.3574 82.6508 35.9076H82.6491Z"
            fill="url(#paint0_radial_197_726)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_197_726"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(41.4997 0.244141) rotate(90) scale(79.5078 82.3022)"
            >
              <stop stop-color="#F2EBDD" />
              <stop offset="0.5" stop-color="#D4C5A6" />
              <stop offset="1" stop-color="#9F7622" />
            </radialGradient>
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

export default StarMarker;
