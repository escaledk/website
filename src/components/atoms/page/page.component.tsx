import styled from 'styled-components';
import { themeColorSelector, themePaddingSelector } from '../../../config/theme';
import { IPageProps } from './page.types';

export const Page = styled.div<IPageProps>`
  width: calc(100% - (${themePaddingSelector(2)} * 2));
  height: calc(100% - (${themePaddingSelector(2)} * 2));
  padding: ${themePaddingSelector(2)};

  ${(props) =>
    props.center &&
    `
  display: flex;
  justify-content: center;
  align-items: center;
  `}

  background-color: ${themeColorSelector('backgroundColor')};
`;
