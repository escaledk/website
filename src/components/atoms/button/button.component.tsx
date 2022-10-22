import { IButtonProps } from './Button.types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import * as Styled from './Button.styled';
import { Loader } from '../loader';
import { theme } from '../../../config/theme';

export const Button = ({ children = 'Button', isLoading, variant = 'filled', width = 'fit', onClick }: IButtonProps) => {
  const loaderColors = {
    filled: 'white',
    ghost: theme.colors.primary,
    text: theme.colors.primary,
  };

  return (
    <Styled.Button onClick={onClick} variant={variant} width={width} type="submit">
      {isLoading ? <Loader color={loaderColors[variant]} /> : children}
    </Styled.Button>
  );
};
