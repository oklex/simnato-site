import { useHover } from "@src/stores/useHover";
import useScreenSize from "@src/stores/useScreenSize";
import { BREAKPOINTS } from "@src/theme";
import { Div, Text } from "@src/ui-library";
import { createRef, ReactElement } from "react";
import styled from "styled-components";

type Score = 1 | 2 | 3 | 4 | 5;
type Coordinate = string;
const DISTANCE_INCREMENT = 35;
const BASE_VIEWBOX_SIZE = 350;
const VIEWBOX_PADDING = 15;
const VIEWBOX_DIMENSION = BASE_VIEWBOX_SIZE + VIEWBOX_PADDING * 2;

export type CommitteeStatsTypes = {
  knowledge: Score;
  speeches: Score;
  pacing: Score;
  moderation: Score;
};
interface StatsProps {
  committeeStats: CommitteeStatsTypes;
}

const statDescription = {
  knowledge: {
    "1": "little research is required",
    "2": "some research is required",
    "3": "a regular amount of research is recommended",
    "4": "extra research is recommended",
    "5": "lots of research is recommended",
  },
  speeches: {
    "1": "expect mostly smaller conversations",
    "2": "expect a mix of smaller conversations and speeches",
    "3": "speeches may be impactful but aren't essential",
    "4": "expect speeches to be important",
    "5": "expect speeches to be essential",
  },
  pacing: {
    "1": "expected to be slow paced",
    "2": "expected to be slower at times",
    "3": "can vary widely from slow to fast",
    "4": "expected to be faster at times",
    "5": "expected to be fast paced",
  },
  moderation: {
    "1": "almost entirely unmoderated",
    "2": "mostly unmoderated, some moderated",
    "3": "mixed moderated and unmoderated",
    "4": "mostly moderated debate, some unmod",
    "5": "almost entirely moderated",
  },
};

export const StatsChart = ({ committeeStats }: StatsProps): ReactElement => {
  const { knowledge, speeches, pacing, moderation } = committeeStats;

  const ref1_top = createRef<SVGCircleElement>();
  const ref2_right = createRef<SVGCircleElement>();
  const ref3_bottom = createRef<SVGCircleElement>();
  const ref4_left = createRef<SVGCircleElement>();

  const ref1_hover = useHover(ref1_top);
  const ref2_hover = useHover(ref2_right);
  const ref3_hover = useHover(ref3_bottom);
  const ref4_hover = useHover(ref4_left);

  const ref1_text = statDescription.knowledge[knowledge];
  const ref2_text = statDescription.speeches[speeches];
  const ref3_text = statDescription.pacing[pacing];
  const ref4_text = statDescription.moderation[moderation];

  const polygonCoordinates = (() => {
    const mid = BASE_VIEWBOX_SIZE / 2 + VIEWBOX_PADDING;
    const addFromCenter = (score: Score) => mid + DISTANCE_INCREMENT * score;
    const subtractFromCenter = (score: Score) =>
      mid - DISTANCE_INCREMENT * score;

    const top = {
      x: mid,
      y: subtractFromCenter(knowledge),
    };
    const right = {
      x: addFromCenter(speeches),
      y: mid,
    };
    const bottom = {
      x: mid,
      y: addFromCenter(pacing),
    };
    const left = {
      x: subtractFromCenter(moderation),
      y: mid,
    };
    const stringify = ({ x, y }: { x: number; y: number }) => `${x} ${y}`;
    return [
      stringify(top),
      stringify(right),
      stringify(bottom),
      stringify(left),
    ];
  })();
  const statVectors = `M${polygonCoordinates[3]} L${polygonCoordinates[0]} L${polygonCoordinates[1]} L${polygonCoordinates[2]} L${polygonCoordinates[3]}`;

  const generateInfoCircles = (
    coordinate: string,
    persist: boolean,
    index: number
  ) => {
    const CLASSNAME = persist ? "persist" : "animate-on-hover";
    const [cx, cy, ...rest] = coordinate
      .trim()
      .split(" ")
      .map((coord) => parseFloat(coord));
    const title = Object.keys(statDescription)[index];

    const ref = (() => {
      if (index === 0) return ref1_top;
      if (index === 1) return ref2_right;
      if (index === 2) return ref3_bottom;
      if (index === 3) return ref4_left;
      return ref1_top;
    })();
    return (
      <>
        {persist && (
          <circle cx={cx} cy={cy} r="2" fill="#C4C4C4" className={CLASSNAME} />
        )}
        <circle
          cx={cx}
          cy={cy}
          r="7"
          stroke="#C4C4C4"
          fill="transparent"
          className={CLASSNAME}
          ref={ref}
        />
      </>
    );
  };

  return (
    <StatsContainer>
      <SvgWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${VIEWBOX_DIMENSION}`}
          height={`${VIEWBOX_DIMENSION}`}
          viewBox={`0 0 ${VIEWBOX_DIMENSION} ${VIEWBOX_DIMENSION}`}
          fill="none"
        >
          <line x1="16" y1="190.5" x2="366" y2="190.5" stroke="#28317F" />
          <line x1="190.5" y1="366" x2="190.5" y2="16" stroke="#28317F" />
          <rect
            x="15.7071"
            y="190.494"
            width="247"
            height="247"
            transform="rotate(-45 15.7071 190.494)"
            stroke="#28317F"
            fill-opacity="0.5"
          />
          <rect
            x="48.7071"
            y="190.747"
            width="200.875"
            height="200.875"
            transform="rotate(-45 48.7071 190.747)"
            stroke="#28317F"
            fill-opacity="0.5"
          />
          <rect
            x="83.7071"
            y="190.627"
            width="149.793"
            height="149.793"
            transform="rotate(-45 83.7071 190.627)"
            stroke="#28317F"
            fill-opacity="0.5"
          />
          <rect
            x="121.52"
            y="191.187"
            width="98.3906"
            height="98.3906"
            transform="rotate(-45 121.52 191.187)"
            stroke="#28317F"
            fill-opacity="0.5"
          />
          <rect
            x="154.52"
            y="191.187"
            width="51.3259"
            height="51.3259"
            transform="rotate(-45 154.52 191.187)"
            stroke="#28317F"
            fill-opacity="0.5"
          />
          <path
            d={statVectors}
            fill="url(#paint0_linear_3524_419)"
            fill-opacity="0.95"
            className="no-pointers"
          />
          {polygonCoordinates.map((coordinate, index) =>
            generateInfoCircles(coordinate, true, index)
          )}
          <defs>
            <linearGradient
              id="paint0_linear_3524_419"
              x1="260.528"
              y1="0.160081"
              x2="260.528"
              y2="449.794"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B19967" />
              <stop offset="1" stop-color="#D4C5A6" />
            </linearGradient>
            <clipPath id="clip0_460_429">
              <rect width="350" height="350" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </SvgWrapper>
      <ContextDescription>
        {ref1_hover && <Text align="center">{ref1_text}</Text>}
        {ref2_hover && <Text align="center">{ref2_text}</Text>}
        {ref3_hover && <Text align="center">{ref3_text}</Text>}
        {ref4_hover && <Text align="center">{ref4_text}</Text>}
      </ContextDescription>
    </StatsContainer>
  );
};

const StatsContainer = styled(Div)`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    transform: scale(0.6);
    margin-left: -90px;
  }
`;
const ContextDescription = styled(Div)`
  position: absolute;
  height: 0px;
  margin-top: -15px;
  bottom: 0;
`;
const SvgWrapper = styled(Div)`
  .persist {
    opacity: 1;
  }

  .no-pointers {
    pointer-events: none;
  }

  .animate-on-hover {
    opacity: 0.01;
    transition: transform 0.1s, opacity 0.1s;
  }

  .animate-on-hover:hover {
    opacity: 1;
  }
`;
