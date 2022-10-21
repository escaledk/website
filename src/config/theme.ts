import { IColor, IFont, IFontSize, IFontWeight, IPadding, IShadow, ITheme } from '../interfaces/ITheme';
import tinyColor from 'tinycolor2';

const colors: IColor = {
  primary: '#1D7DC0',
  backgroundColor: '#F2F2F4',
  secondary: '#749BC9',
  surface: '#FFFFFF',
  text: '#333333',
  activeText: '#FFFFFF',
  shadowColor: '240deg 8% 95%',
  borderPassive: '#f9f9f9',
  borderActive: '#e6e6e6',
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
    weight: {
      normal: 'normal',
      bold: 'bold',
      bolder: 'bolder',
    },
    size: {
      small: '0.833rem',
      regular: '1rem',
      large: '1.2rem',
      xLarge: '1.44rem',
      xxLarge: '2.074rem',
    },
  },
  shadow: {
    low: `0px 1px 1.1px hsl( ${colors.shadowColor} / 0.34), 0px 1.7px 1.9px -1.2px hsl( ${colors.shadowColor} / 0.34), 0px 4px 4.5px -2.5px hsl( ${colors.shadowColor} / 0.34)`,
    medium: `0px 1px 1.1px hsl( ${colors.shadowColor} / 0.36), 0px 3.3px 3.7px -0.8px hsl( ${colors.shadowColor} / 0.36), 0px 8.2px 9.2px -1.7px hsl( ${colors.shadowColor} / 0.36), 0px 20px 22.5px -2.5px hsl( ${colors.shadowColor} / 0.36)`,
    high: `0px 1px 1.1px hsl( ${colors.shadowColor} / 0.34), 0px 5.8px 6.5px -0.4px hsl( ${colors.shadowColor} / 0.34), 0px 10.9px 12.3px -0.7px hsl( ${colors.shadowColor} / 0.34), 0px 17.9px 20.1px -1.1px hsl( ${colors.shadowColor} / 0.34), 0px 28.6px 32.2px -1.4px hsl( ${colors.shadowColor} / 0.34), 0px 44.7px 50.3px -1.8px hsl( ${colors.shadowColor} / 0.34), 0.1px 67.9px 76.4px -2.1px hsl( ${colors.shadowColor} / 0.34), 0.1px 100px 112.5px -2.5px hsl( ${colors.shadowColor} / 0.34)`,
  },
};

interface IThemeProps {
  theme: ITheme;
}

export const themePaddingSelector = (size: keyof IPadding) => (props: IThemeProps) => props.theme.padding[size];
export const themeColorSelector = (color: keyof IColor) => (props: IThemeProps) => props.theme.colors[color];
export const themeFontSizeSelector = (font: keyof IFontSize) => (props: IThemeProps) => props.theme.font.size[font];
export const themeFontWeightSelector = (font: keyof IFontWeight) => (props: IThemeProps) => props.theme.font.weight[font];
export const themeBorderRadiusSelector = (props: IThemeProps) => props.theme.borderRadius;
export const themeShadowSelector = (shadow: keyof IShadow) => (props: IThemeProps) => props.theme.shadow[shadow];

export const getHoverColor = (color: string) => {
  const hex = tinyColor(color).darken(10).toHex().toString();
  return `#${hex}`;
};
