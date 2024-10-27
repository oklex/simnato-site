import {
  ReactElement,
  ReactNode,
  Ref,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

import { NavThemeContext } from "@context/navTheme";
import { useScrollPosition } from "@stores/useScrollPosition";
import { COLORS, GRADIENTS } from "@src/theme";
import { Div } from "@src/ui-library";

type DarkSectionType = {
  id: string;
  children: ReactNode | null;
};

export const DarkSection = ({
  id,
  children,
}: DarkSectionType): ReactElement => {
  const { initializeRef } = useContext(NavThemeContext);
  const paddingTopRef = useRef<HTMLDivElement | null>(null);
  const paddingBottomRef = useRef<HTMLDivElement | null>(null);
  const [trackHeight, setTrackHeight] = useState<number | null>(null);

  const trackRefCallback = (instance: HTMLDivElement | null) => {
    if (instance) initializeRef(id, { current: instance });
  };

  const negativeMargin =
    (paddingTopRef.current?.clientHeight ?? 0) +
    (paddingBottomRef.current?.clientHeight ?? 0);

  return (
    <TrackWrapper
      className="track-wrapper"
      ref={trackRefCallback}
      height={trackHeight}
    >
      <MaskTop className="mask-top" ref={paddingTopRef}>
        <PaddingBar />
        <Div flex justifyContent="between">
          <CornerSvg direction="top-left" />
          <CornerSvg direction="top-right" />
        </Div>
      </MaskTop>
      <MaskBottom className="mask-bottom" ref={paddingBottomRef}>
        <Div flex justifyContent="between">
          <CornerSvg direction="bottom-left" />
          <CornerSvg direction="bottom-right" />
        </Div>
        <PaddingBar />
      </MaskBottom>

      <CustomSection className="custom-section" negMargin={negativeMargin}>
        {children}
      </CustomSection>
    </TrackWrapper>
  );
};

// the track contains the full height of the content
const TrackWrapper = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  display: relative;
`;

const MaskTop = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 9;

  max-height: calc(100vh - 1.6rem);
  pointer-events: none;
  overflow-y: hidden;
`;
const MaskBottom = styled.div`
  position: sticky;
  top: calc(100vh - 20px - 1rem);
  left: 0px;
  z-index: 9;

  max-height: calc(100vh - 1.6rem);
  pointer-events: none;
  overflow-y: hidden;
`;

const CustomSection = styled.div<{ negMargin: number }>`
  background: linear-gradient(to bottom, ${GRADIENTS.main});
  margin-top: -${({ negMargin }) => negMargin}px;
`;

const PaddingBar = styled.div`
  height: 1rem;
  background-color: ${COLORS.background};
`;
const CornerSvg = ({
  direction,
}: {
  direction: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}): ReactElement => {
  const RADIUS = 20;
  const rotation = (() => {
    switch (direction) {
      case "top-left":
        return 0;
      case "top-right":
        return 90;
      case "bottom-left":
        return -90;
      case "bottom-right":
        return -180;
    }
  })();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={RADIUS}
      height={RADIUS}
      viewBox={`0 0 ${RADIUS} ${RADIUS}`}
      fill={COLORS.background}
      transform={`rotate(${rotation}, 0, 0)`}
    >
      <path d="M-0.000487161 -0.000976562H19.9995C4.11936 0.0123475 -0.00296934 4.64167 -0.000487161 19.999V-0.000976562Z" />
    </svg>
  );
};
