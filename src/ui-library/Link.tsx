import React, { FC, ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Text, TextProps } from "./Text";

type LinkTextProps = TextProps & NextLinkProps & {
  children: ReactNode;
  href: string;
};

export const LinkText: FC<LinkTextProps> = ({ children, mode = 'gold', href, ...rest }) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <Text as="a" {...rest} mode={mode}>
        {children}
      </Text>
    </NextLink>
  );
};
