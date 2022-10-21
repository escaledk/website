export interface ITheme {
  colors: IColor;
  borderRadius: string;
  padding: IPadding;
  font: IFont;
  shadow: IShadow;
}

export interface IShadow {
  low: string;
  medium: string;
  high: string;
}

export interface IColor {
  primary: string;
  secondary: string;
  backgroundColor: string;
  surface: string;
  text: string;
  activeText: string;
  shadowColor: string;
  borderActive: string;
  borderPassive: string;
}

export interface IPadding {
  2: '8px';
  4: '16px';
  8: '32px';
}

export interface IFont {
  weight: IFontWeight;
  size: IFontSize;
}

export interface IFontWeight {
  normal: 'normal';
  bold: 'bold';
  bolder: 'bolder';
}

export interface IFontSize {
  small: '0.833rem';
  regular: '1rem';
  large: '1.2rem';
  xLarge: '1.44rem';
  xxLarge: '2.074rem';
}
