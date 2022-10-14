import styled from 'styled-components';
import { themeColorSelector } from '../../config/theme';
import { IPageProps } from './page.types';

export const Page = styled.div<IPageProps>`
  width: 100%;
  height: 100%;
  display: flex;
  ${(props) =>
    props.center &&
    `
  justify-content: center;
  align-items: center;
  `}

  background-color: ${themeColorSelector('backgroundColor')};
`;
