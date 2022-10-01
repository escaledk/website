import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuthStore } from '../../stores/auth';
import { selectIsAuthenticated } from '../../stores/auth/auth.selectors';
import Link from '../link/link.component';
import * as Styled from './menubar.styled';
import { IMenubarProps } from './menubar.types';

export const Menubar = ({ items }: IMenubarProps) => {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const router = useRouter();

  if (!isAuthenticated) return null;

  return (
    <Styled.Container open={true}>
      <Styled.Navigation>
        {items?.map(({ link, text }, index) => (
          <Link link={link} key={`menu-item-${index}`}>
            <Styled.Item isActive={router.asPath === link}>{text}</Styled.Item>
          </Link>
        ))}
      </Styled.Navigation>
    </Styled.Container>
  );
};
