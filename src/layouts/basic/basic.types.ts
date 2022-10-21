import { ReactElement } from 'react';
import { Content, Header } from './basic.styled';

export interface IBasicLayoutProps {
  children: Array<ReactElement<typeof Content | typeof Header>>;
}
