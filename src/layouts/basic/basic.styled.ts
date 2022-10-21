import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { themePaddingSelector } from '../../config/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: ${themePaddingSelector(4)};
`;
export const Header = styled.header`
  width: calc(100% - ${themePaddingSelector(2)} * 2);
  height: 40px;
  padding: ${themePaddingSelector(2)};
`;
export const Content = styled.article`
  width: calc(100% - ${themePaddingSelector(2)} * 2);
  height: 100%;
  padding: ${themePaddingSelector(2)};
`;
