export interface ITheme {
  colors: IColor;
  borderRadius: '8px';
  padding: IPadding;
  font: IFont;
}

export interface IColor {
  primary: string;
  secondary: string;
  backgroundColor: string;
  surface: string;
  text: string;
  activeText: string;
}

export interface IPadding {
  2: '8px';
  4: '16px';
  8: '32px';
}

export interface IFont {
  small: '0.833rem';
  regular: '1rem';
  large: '1.2rem';
  xLarge: '1.44rem';
  xxLarge: '2.074rem';
}
