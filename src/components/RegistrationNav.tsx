import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { PALETTE } from "../theme";
import TextLogo from "../assets/textLogo";
import { Text } from "../ui-library";
import { useRouter } from "next/router";
import Link from "next/link";

export const RegistrationNav = (): ReactElement => {
  const router = useRouter();
  const currentPath = router.pathname;
  const onLightBackground = currentPath !== "/";

  const showNav = () => (
    <NavigationWrapper id="registration-nav">
      <StyledNav shouldBeTransparent={onLightBackground}>
        <NavContent>
          <Link href="/">
            <TextLogo
              height="1.4rem"
              color={onLightBackground ? "black" : "white"}
            />
          </Link>
          <Link href="/registration">
            <Text
              mode={onLightBackground ? "dark" : "gold"}
              size="md"
              bold={!onLightBackground}
              uppercase
              spaced
            >
              register
            </Text>
          </Link>
        </NavContent>
      </StyledNav>
    </NavigationWrapper>
  );

  return showNav();
};

const NavContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 99;
  top: 30px;
`;

const StyledNav = styled.button<{ shouldBeTransparent: boolean }>`
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
  border-radius: 20px;
  background: linear-gradient(
    to right,
    ${PALETTE.gold.main},
    ${rgba(PALETTE.gold.light, 0.1)}
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
    border-radius: 20px;
    background-color: ${({ shouldBeTransparent: lightBackground }) =>
      lightBackground === true ? "#D4C5A6" : "#313979"};
    z-index: -1;
    transition: 400ms;
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
