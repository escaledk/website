import styled from 'styled-components';
import { themeColorSelector } from '../../config/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  gap: 0;
`;

export const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${themeColorSelector('backgroundColor')};
`;
