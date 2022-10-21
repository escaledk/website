import { FunctionComponent } from 'react';
import * as Styled from './basic.styled';
import { IBasicLayoutProps } from './basic.types';

export const BasicLayout: FunctionComponent<IBasicLayoutProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export const BasicHeaderLayout = Styled.Header;
export const BasicContentLayout = Styled.Content;
