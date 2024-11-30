import React, { ReactElement, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import { rgba } from "polished";
import Link from "next/link";

import { NavThemeContext } from "@context/navTheme";
import TextLogo from "@assets/textLogo";
import { Div, Header, Icon, NarrowContainer, Spacer, Text } from "@ui-library";
import useScreenSize from "@stores/useScreenSize";
import StarMarker from "@assets/starMarkers";

import { PALETTE } from "../theme";
import FullScreenModal from "./FullScreenModal";
const RADIUS = 12;

export const Navigation = ({ sticky }: { sticky?: boolean }): ReactElement => {
  const { theme } = useContext(NavThemeContext);
  const { isMobile } = useScreenSize();
  const { pathname } = useRouter();
  const [openNav, setOpenNav] = useState(false);
  const onLightBackground = theme === "light" || openNav;

  const toggleModal = () => setOpenNav((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setOpenNav(false);
    }, 100);
  }, [pathname]);

  const showNav = () => (
    <>
      <NavigationWrapper
        sticky={!!sticky}
        isMobile={isMobile}
        id="registration-nav"
      >
        <StyledNav
          shouldBeTransparent={onLightBackground}
          onClick={toggleModal}
        >
          <NavContent>
            <Link href="/" onClick={(e) => e.stopPropagation()}>
              <TextLogo
                height="1.4rem"
                color={onLightBackground ? "black" : "white"}
              />
            </Link>
            <BigNavSpace flex justifyContent="end">
              <Icon
                icon={openNav ? "x" : "menu"}
                mode={onLightBackground ? "dark" : "light"}
              />
            </BigNavSpace>
            {/* <Link href="/registration">
							<Text
								mode={onLightBackground ? 'dark' : 'silver'}
								size="md"
								uppercase
								spaced
							>
								register
							</Text>
						</Link> */}
          </NavContent>
        </StyledNav>
      </NavigationWrapper>
      <FullScreenModal isOpen={openNav} onClose={toggleModal}>
        <Div flex flexDirection="col" justifyContent="center" height="100%">
          <NarrowContainer>
            <Div flex justifyContent="start">
              <NavigationModalContent isMobile={isMobile}>
                <NavLink label="Home" route="/" />
                <NavLink label="Conference" route="/" />
                <Spacer height="calc(3vh + 12px)" />
                <Div flex flexDirection="col" gap="8px" padding="4px 0px 0px">
                  <Text mode="gold" align={isMobile ? "left" : "center"}>
                    Committees
                  </Text>
                  <NavLink
                    label="North Atlantic Council"
                    route="/committees/nac"
                    variant="secondary"
                  />
                  <NavLink
                    label="Miltary Committee"
                    route="/committees/mc"
                    variant="secondary"
                  />
                  <NavLink
                    label="NATO Partners"
                    route="/committees/partners"
                    variant="secondary"
                  />
                  <NavLink
                    label="Intelligence & Espionage"
                    route="/committees/espionage"
                    variant="secondary"
                  />
                </Div>
                <Spacer height="calc(3vh + 12px)" />
                <NavLink label="Register" route="/registration" />
              </NavigationModalContent>
            </Div>
          </NarrowContainer>
        </Div>
      </FullScreenModal>
    </>
  );

  return showNav();
};

interface TextLinkProps {
  label: string;
  route: string;
  variant?: "primary" | "secondary"; // New prop for link styling
}
const NavLink = ({
  label,
  route,
  variant = "primary",
}: TextLinkProps): ReactElement => {
  const { isMobile } = useScreenSize();
  const { pathname } = useRouter();
  const selected = pathname.endsWith(route);

  return (
    <Div flex justifyContent={isMobile ? "start" : "center"}>
      {/* {selected && <StarMarker type="blue" height='2em' padding='0px 15px'/>} */}
      {selected ? (
        <Header
          level={variant === "primary" ? 1 : isMobile ? 3 : 2}
          mode="silver"
        >
          {label}
        </Header>
      ) : (
        <Link href={route}>
          <Header
            level={variant === "primary" ? 1 : isMobile ? 3 : 2}
            mode="dark"
          >
            {label}
          </Header>
        </Link>
      )}
    </Div>
  );
};

const NavContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavigationModalContent = styled.div<{ isMobile: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  a {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      transition: color 0.1s ease-out, transform 0.1s ease-out;
      transform: scale(1);

      &:hover {
        color: ${PALETTE.blue.main} !important;
        transform: scale(1.025);
      }
    }
  }

  ${({ isMobile }) =>
    isMobile
      ? css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            text-align: start !important;
          }
        `
      : css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            text-align: center !important;
          }
        `}
`;

const NavigationWrapper = styled.div<{ sticky: boolean; isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "100%" : "calc(100% - 10px)")};
  display: flex;
  justify-content: center;

  position: ${({ sticky }) => (sticky ? "sticky" : "fixed")};
  z-index: 999;
  left: 0;
  top: 30px;
`;

const StyledNav = styled.button<{ shouldBeTransparent: boolean }>`
  cursor: pointer;
  padding: 0.6rem 1rem;
  width: calc(100% - 50px);

  /* Larger screens, subtract 440px, but max out at 1200px */
  @media (min-width: 769px) {
    max-width: calc(100vw - 440px);
    max-width: 950px; /* Ensure it doesn't exceed 1200px */
  }

  border: none;
  outline: none;
  position: relative;
  z-index: 1;
  border-radius: ${RADIUS}px;
  background: linear-gradient(
    to right,
    ${({ shouldBeTransparent }) =>
      shouldBeTransparent ? PALETTE.silver.main : PALETTE.gold.main},
    ${({ shouldBeTransparent }) =>
      rgba(shouldBeTransparent ? PALETTE.blue.dark : PALETTE.gold.light, 0.3)}
  );
  align-items: center;

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    border-radius: ${RADIUS}px;
    background-color: ${({ shouldBeTransparent: lightBackground }) =>
      lightBackground === true ? PALETTE.silver.main : "#313979"};
    z-index: -1;
    transition: 200ms;
    ${({ shouldBeTransparent }) =>
      shouldBeTransparent &&
      css`
        opacity: 60%;
      `}
  }

  &:hover::before {
    opacity: 80%;
  }

  & > * {
    align-items: center;
    align-self: center;
  }
`;

const BigNavSpace = styled(Div)`
  flex-grow: 1;
  cursor: pointer;
`;
