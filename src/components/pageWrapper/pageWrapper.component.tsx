import { IPageWrapperProps } from './pageWrapper.types';
import * as Styled from './pageWrapper.styled';
import { useAuthStore } from '../../stores/auth';
import { selectIsAuthenticated } from '../../stores/auth/auth.selectors';
import { Menubar } from '../menubar';
import { IMenubarItem } from '../menubar/menubar.types';

// TODO: add the items to the database
const items: IMenubarItem[] = [
  {
    link: '/',
    text: 'Dashboard',
  },
  {
    link: '/customers',
    text: 'Customers',
  },
  {
    link: '/departments',
    text: 'Departments',
  },
];

export const PageWrapper = ({ children }: IPageWrapperProps) => {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  return (
    <Styled.Container>
      {isAuthenticated && <Menubar items={items} />}
      <Styled.Page>{children}</Styled.Page>
    </Styled.Container>
  );
};
