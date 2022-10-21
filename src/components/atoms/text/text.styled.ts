import styled from 'styled-components';
import { themeColorSelector, themeFontSelector } from '../../../config/theme';
import { ITextStyledProps } from './text.types';

export const Text = styled.p<ITextStyledProps>`
  padding: 0;
  margin: 0;
  font-size: ${(props) => themeFontSelector(props.size!)(props)};
  color: ${themeColorSelector('text')};
`;
