import styled from 'styled-components';
import { themeBorderRadiusSelector, themePaddingSelector, themeShadowSelector } from '../config/theme';

export const Table = styled.div`
  box-shadow: ${themeShadowSelector('high')};
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: ${themePaddingSelector(2)};
  justify-content: center;
  align-items: center;
`;
