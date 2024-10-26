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
import { GRADIENTS } from "@src/theme";

type DarkSectionType = {
  id: string;
  children: ReactNode | ReactNode[] | null;
};

export const DarkSection = ({
  id,
  children,
}: DarkSectionType): ReactElement => {
  const { initializeRef } = useContext(NavThemeContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScrollPosition();
  const [scrollOffset, setScrollOffset] = useState<number | null>(null);

  const refCallback = (instance: HTMLDivElement | null) => {
    if (instance) {
      initializeRef(id, { current: instance });
      ref.current = instance;
    }
  };

  useEffect(() => {
    if (ref.current) setScrollOffset(ref.current.getBoundingClientRect().top);
    console.log(
      id,
      "dark section context",
      {
        innerHeight: window.innerHeight,
        scrollY: window.scrollY,
        trackTop: ref.current.getBoundingClientRect().top,
      },
      {
        inverseTop:
          ref.current.getBoundingClientRect().top > 0
            ? ref.current.getBoundingClientRect().top
            : 0,
        // inverseBot: window.scrollY
      }
    );
  }, [ref, scrollY]);

  return (
    <TrackWrapper id="track-wrapper" ref={refCallback}>
      <MaskWrapper>
        <CustomSection>{children}</CustomSection>
      </MaskWrapper>
    </TrackWrapper>
  );
};

// the track contains the full height of the content
const TrackWrapper = styled.div`
  display: relative;
`;

const MaskWrapper = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;

  max-height: calc(100vh - 1.6rem);
  pointer-events: none;
  overflow-y: hidden;
  border-radius: 20px;
`;

const CustomSection = styled.div`
  padding: 0.8rem 0.9rem;
  border-radius: 20px;

  background: linear-gradient(to bottom, ${GRADIENTS.main});
`;

const Mask = styled.div<{ "-invHeight": number }>`
  overflow-y: hidden;
`;
