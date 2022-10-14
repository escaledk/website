import styled from 'styled-components';
import { themeBorderRadiusSelector, themeColorSelector, themePaddingSelector, themeShadowSelector } from '../../config/theme';

export const Container = styled.div`
  padding: ${themePaddingSelector(8)};
  background-color: ${themeColorSelector('surface')};
  border-radius: ${themeBorderRadiusSelector};
  box-shadow: ${themeShadowSelector('high')};
`;
