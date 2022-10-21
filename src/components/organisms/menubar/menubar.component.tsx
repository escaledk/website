import { useRouter } from 'next/router';
import { Link } from '../../atoms/link';
import * as Styled from './menubar.styled';
import { IMenubarProps } from './menubar.types';

export const Menubar = ({ items }: IMenubarProps) => {
  const router = useRouter();

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
