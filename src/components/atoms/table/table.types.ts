import { ReactNode } from 'react';

export interface ITableProps<T> {
  columns: Array<keyof T>;
  data: T[];
  spacing: {
    [key in keyof T]?: string;
  };
  onRenderer: (data: T, index: number) => ReactNode;
  selectedIndex?: number;
}
