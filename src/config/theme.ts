import { IColor, IFont, IPadding, IShadow, ITheme } from '../interfaces/ITheme';
import tinyColor from 'tinycolor2';

const colors: IColor = {
  primary: '#1D7DC0',
  backgroundColor: '#F2F2F4',
  secondary: '#749BC9',
  surface: '#FFFFFF',
  text: '#333333',
  activeText: '#FFFFFF',
  shadowColor: '240deg 10% 80%',
};

export const theme: ITheme = {
  colors,
  borderRadius: '6px',
  padding: {
    2: '8px',
    4: '16px',
    8: '32px',
  },
  font: {
    small: '0.833rem',
    regular: '1rem',
    large: '1.2rem',
    xLarge: '1.44rem',
    xxLarge: '2.074rem',
  },
  shadow: {
    low: `0px 0.2px 0.2px hsl( ${colors.shadowColor} / 0.34), 0px 0.3px 0.3px -1.2px hsl( ${colors.shadowColor} / 0.34), 0px 0.7px 0.8px -2.5px hsl( ${colors.shadowColor} / 0.34)`,
    medium: `0px 0.2px 0.2px hsl( ${colors.shadowColor} / 0.36), 0px 0.5px 0.6px -0.8px hsl( ${colors.shadowColor} / 0.36), 0px 1.3px 1.5px -1.7px hsl( ${colors.shadowColor} / 0.36), 0px 3.3px 3.7px -2.5px hsl( ${colors.shadowColor} / 0.36)`,
    high: `0px 0.2px 0.2px hsl( ${colors.shadowColor} / 0.34), 0px 1px 1.1px -0.4px hsl( ${colors.shadowColor} / 0.34), 0px 1.8px 2px -0.7px hsl( ${colors.shadowColor} / 0.34), 0px 2.9px 3.3px -1.1px hsl( ${colors.shadowColor} / 0.34), 0px 4.7px 5.3px -1.4px hsl( ${colors.shadowColor} / 0.34), 0px 7.3px 8.2px -1.8px hsl( ${colors.shadowColor} / 0.34), 0.1px 11.1px 12.5px -2.1px hsl( ${colors.shadowColor} / 0.34), 0.1px 16.4px 18.5px -2.5px hsl( ${colors.shadowColor} / 0.34)`,
  },
};

interface IThemeProps {
  theme: ITheme;
}

export const themePaddingSelector = (size: keyof IPadding) => (props: IThemeProps) => props.theme.padding[size];
export const themeColorSelector = (color: keyof IColor) => (props: IThemeProps) => props.theme.colors[color];
export const themeFontSelector = (font: keyof IFont) => (props: IThemeProps) => props.theme.font[font];
export const themeBorderRadiusSelector = (props: IThemeProps) => props.theme.borderRadius;
export const themeShadowSelector = (shadow: keyof IShadow) => (props: IThemeProps) => props.theme.shadow[shadow];

export const getHoverColor = (color: string) => {
  const hex = tinyColor(color).darken(10).toHex().toString();
  return `#${hex}`;
};
