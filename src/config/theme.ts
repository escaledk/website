import { IColor, IFont, IPadding, ITheme } from '../interfaces/ITheme';
import tinyColor from 'tinycolor2';

export const theme: ITheme = {
  colors: {
    backgroundColor: '#F2F2F4',
    primary: '#1D7DC0',
    secondary: '#749BC9',
    surface: '#FFFFFF',
    text: '#333333',
    activeText: '#FFFFFF',
  },
  borderRadius: '8px',
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
};

interface IThemeProps {
  theme: ITheme;
}

export const themePaddingSelector = (size: keyof IPadding) => (props: IThemeProps) => props.theme.padding[size];
export const themeColorSelector = (color: keyof IColor) => (props: IThemeProps) => props.theme.colors[color];
export const themeFontSelector = (font: keyof IFont) => (props: IThemeProps) => props.theme.font[font];
export const themeBorderRadiusSelector = () => (props: IThemeProps) => props.theme.borderRadius;

export const getHoverColor = (color: string) => {
  const hex = tinyColor(color).toRgb();
  return `rgb(${hex.r}, ${hex.g}, ${hex.b}, 0.25)`;
};
