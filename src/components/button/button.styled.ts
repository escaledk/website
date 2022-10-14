import styled, { css } from 'styled-components';
import {
  getHoverColor,
  themeBorderRadiusSelector,
  themeColorSelector,
  themeFontSelector,
  themePaddingSelector,
  themeShadowSelector,
} from '../../config/theme';
import { IButtonStyledProps } from './button.types';

const filledVariant = css`
  background-color: ${themeColorSelector('primary')};
  padding: ${themePaddingSelector(2)} ${themePaddingSelector(4)};
  border: none;
  color: ${themeColorSelector('activeText')};

  &:hover {
    background-color: ${(props) => getHoverColor(themeColorSelector('primary')(props))};
  }
`;

const ghostVariant = css`
  background-color: transparent;
  padding: ${themePaddingSelector(2)} ${themePaddingSelector(4)};
  border: 1px solid ${themeColorSelector('primary')};
  color: ${themeColorSelector('primary')};

  &:hover {
    color: ${(props) => getHoverColor(themeColorSelector('primary')(props))};
    border-color: ${(props) => getHoverColor(themeColorSelector('primary')(props))};
  }
`;

const textVariant = css`
  background-color: ${themeColorSelector('primary')};
  border: none;
  color: ${themeColorSelector('primary')};
  padding: none;

  &:hover {
    color: ${(props) => getHoverColor(themeColorSelector('primary')(props))};
  }
`;

const variantSelector = (props: IButtonStyledProps) => {
  switch (props.variant) {
    case 'text':
      return textVariant;
    case 'ghost':
      return ghostVariant;
    default:
      return filledVariant;
  }
};

export const Button = styled.button<IButtonStyledProps>`
  width: ${(props) => (props.width === 'full' ? '100%' : 'fit-content')};
  border-radius: ${themeBorderRadiusSelector};
  font-size: ${themeFontSelector('regular')};
  transition: all 0.3s ease-in-out;
  ${variantSelector}

  &:hover {
    cursor: pointer;
    box-shadow: ${themeShadowSelector('medium')};
  }

  &:focus {
    outline: auto;
  }
`;
