import styled from 'styled-components';
import { themeBorderRadiusSelector, themeColorSelector, themePaddingSelector, themeShadowSelector } from '../../../config/theme';

const getWidth = ({ open = false }) => (open ? '200px' : '10px');

export const Container = styled.div<{ open: boolean }>`
  min-width: ${getWidth};
  max-width: ${getWidth};
  width: ${getWidth};
  height: '100%';
  transition: width 300s ease-in-out;
  background-color: ${themeColorSelector('surface')};

  padding: ${(props) => `0px ${themePaddingSelector(2)(props)}`};
  box-shadow: ${themeShadowSelector('low')};
  border-right: 1px solid ${themeColorSelector('borderPassive')};
  z-index: 1;
`;

export const Item = styled.a<{ isActive: boolean }>`
  font: ${themeColorSelector('text')};
  text-decoration: none;
  font-style: none;
  width: calc(100% - ${themePaddingSelector(2)} * 2);
  height: 40px;
  background-color: ${(props) => props.isActive && themeColorSelector('primary')};
  color: ${(props) => themeColorSelector(props.isActive ? 'activeText' : 'text')(props)};
  border-radius: ${themeBorderRadiusSelector};
  display: flex;
  align-items: center;
  pointer-events: ${(props) => props.isActive && 'none'};
  padding: 0px ${themePaddingSelector(2)};
  transition: all 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => !props.isActive && themeColorSelector('borderActive')};
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${themePaddingSelector(2)};
`;
