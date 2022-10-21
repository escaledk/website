import { IFont } from '../../../interfaces/ITheme';

export interface ITextStyledProps {
  size?: keyof IFont;
  children?: string;
}

export interface ITextProps extends ITextStyledProps {}
