import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { PALETTE } from "../theme";
import TextLogo from "../assets/textLogo";
import { Container, Text } from "../ui-library";
import { useRouter } from "next/router";

export const RegistrationNav = ({
  fixed,
}: {
  fixed?: boolean;
}): ReactElement => {
  const router = useRouter();

  const navigateToPage = () => {
    router.push("/registration");
  };

  const showNav = () => (
    <NavigationWrapper id="registration-nav" fixed>
      <StyledNav onClick={() => navigateToPage()}>
        <NavContent>
          <TextLogo height="1.5rem" />
          <Text mode="gold" size="md" bold uppercase spaced>
            register
          </Text>
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

const NavigationWrapper = styled.div<{
  fixed?: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: center;

  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
      z-index: 99;
      top: 20px;
    `}
`;

const StyledNav = styled.button`
  padding: 0.7rem 1rem;

  width: calc(100% - 50px);

  /* Larger screens, subtract 440px, but max out at 1200px */
  @media (min-width: 769px) {
    max-width: calc(100vw - 440px);
    max-width: 1000px; /* Ensure it doesn't exceed 1200px */
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
  transition: 200ms;
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
    background-color: #313979;
    z-index: -1;
    transition: 400ms;
  }

  &:hover::before {
    opacity: 80%;
  }

  & > * {
    align-items: center;
    align-self: center;
  }
`;
