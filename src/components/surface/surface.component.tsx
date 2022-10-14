import { ISurfaceProps } from './surface.types';
import * as Styled from './surface.styled';

export const Surface = ({ children }: ISurfaceProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
