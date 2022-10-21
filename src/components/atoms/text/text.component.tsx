import * as Styled from './text.styled';
import { ITextProps } from './text.types';

export const Text = ({ size = 'regular', children }: ITextProps) => {
  return <Styled.Text size={size}>{children}</Styled.Text>;
};
