import styled from 'styled-components';
import { themeShadowSelector } from '../config/theme';

export const Table = styled.div`
  box-shadow: ${themeShadowSelector('high')};
`;
