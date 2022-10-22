import styled from 'styled-components';
import { themeColorSelector, themePaddingSelector } from '../../config/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${themeColorSelector('backgroundColor')};
`;

export const Header = styled.header`
  width: calc(100% - ${themePaddingSelector(2)} * 2);
  height: 40px;
  padding: ${themePaddingSelector(2)};
  background-color: ${themeColorSelector('surface')};
  border-bottom: 1px solid ${themeColorSelector('borderPassive')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: ${themePaddingSelector(2)};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.article`
  width: calc(100% - ${themePaddingSelector(2)} * 2);
  height: 100%;
  background-color: ${themeColorSelector('surface')};
  padding: ${themePaddingSelector(2)};
  overflow-y: auto;
`;
