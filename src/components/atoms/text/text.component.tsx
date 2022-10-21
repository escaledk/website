import * as Styled from './text.styled';
import { ITextProps } from './text.types';

export const Text = ({ size = 'regular', weight = 'normal', children, width }: ITextProps) => {
  return (
    <Styled.Text width={width} weight={weight} size={size}>
      {children}
    </Styled.Text>
  );
};
