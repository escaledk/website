import * as Styled from './Text.styled';
import { ITextProps } from './Text.types';

export const Text = ({ size = 'regular', weight = 'normal', children, width }: ITextProps) => {
  return (
    <Styled.Text width={width} weight={weight} size={size}>
      {children}
    </Styled.Text>
  );
};
