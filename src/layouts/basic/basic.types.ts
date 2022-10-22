import { ReactElement } from 'react';
import { Content, Header } from './Basic.styled';

export interface IBasicLayoutProps {
  children: Array<ReactElement<typeof Content | typeof Header>>;
}
