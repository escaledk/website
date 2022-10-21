import { IInputGroupProps } from './input.types';
import * as Styled from './input.styled';

export const InputGroup = ({ children }: IInputGroupProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export const InputField = Styled.Input;
export const InputLabel = Styled.Label;
export const Description = Styled.Description;
