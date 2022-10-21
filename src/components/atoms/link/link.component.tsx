import React from 'react';
import * as Styled from './link.styled';
import NextLink from 'next/link';
import { ILinkProps } from './link.types';

export const Link = ({ children, link }: ILinkProps) => {
  return (
    <NextLink href={link} passHref>
      {children}
    </NextLink>
  );
};
