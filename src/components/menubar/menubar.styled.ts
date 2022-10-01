import styled from 'styled-components';
import { getHoverColor, themeBorderRadiusSelector, themeColorSelector, themePaddingSelector } from '../../config/theme';

export const Container = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? '300px' : '10px')};
  height: '100%';
  transition: width 300s ease-in-out;
  background-color: ${themeColorSelector('surface')};

  padding: ${(props) => `0px ${themePaddingSelector(2)(props)}`};
`;

export const Item = styled.a<{ isActive: boolean }>`
  font: ${themeColorSelector('text')};
  text-decoration: none;
  font-style: none;
  width: calc(100% - ${themePaddingSelector(2)} * 2);
  height: 40px;
  background-color: ${(props) => props.isActive && themeColorSelector('primary')};
  color: ${(props) => props.isActive && themeColorSelector('activeText')};
  border-radius: ${themeBorderRadiusSelector};
  display: flex;
  align-items: center;
  pointer-events: ${(props) => props.isActive && 'none'};
  padding: 0px ${themePaddingSelector(2)};
  transition: background-color 0.15s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: ${(props) => !props.isActive && getHoverColor(themeColorSelector('primary')(props))};
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${themePaddingSelector(2)};
`;
