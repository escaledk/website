import { ReactElement } from 'react';
import { IPadding } from '../../../interfaces/ITheme';
import { SidebarContent } from './sidebar.styled';

export interface IStyledSidebarContentProps {
  flexDirection?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'flex-end';
  alignItems?: 'flex-start' | 'flex-end';
  gap?: keyof IPadding;
}

export interface IStyledSidebarProps {
  isOpen: boolean;
}

export interface ISidebarProps extends IStyledSidebarProps {
  title: string;
  onClose: () => void;
  children: ReactElement<typeof SidebarContent>;
}
