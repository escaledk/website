import { IFontSize, IFontWeight } from '../../../interfaces/ITheme';

export interface ITextStyledProps {
  width?: 'full';
  size: keyof IFontSize;
  weight: keyof IFontWeight;
  children?: string;
}

export interface ITextProps {
  width?: 'full';
  size?: keyof IFontSize;
  weight?: keyof IFontWeight;
  children?: string;
}
