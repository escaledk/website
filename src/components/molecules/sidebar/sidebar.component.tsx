import { FunctionComponent } from 'react';
import { ISidebarProps } from './sidebar.types';
import { Text } from '../../atoms/text';
import * as Styled from './sidebar.styled';
import { IoCloseOutline } from 'react-icons/io5';

export const Sidebar: FunctionComponent<ISidebarProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      {isOpen && <Styled.SidebarBackground onClick={onClose} />}
      <Styled.Container isOpen={isOpen}>
        <Styled.SidebarHeader>
          <Text size="xLarge" weight="bold">
            {title}
          </Text>
          <Styled.SidebarHeaderCloseButton onClick={onClose}>
            <IoCloseOutline />
          </Styled.SidebarHeaderCloseButton>
        </Styled.SidebarHeader>
        {children}
      </Styled.Container>
    </>
  );
};

export const SidebarContent = Styled.SidebarContent;
