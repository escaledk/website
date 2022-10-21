import { ITableProps } from './table.types';
import * as Styled from './table.styled';

export function Table<T>({ columns, data, onRenderer, spacing }: ITableProps<T>) {
  const columnRow = (
    <Styled.Columns>
      <Styled.Row data-type="head">
        {columns.map((column, index) => (
          <Styled.Column width={spacing[column] as string} key={`column_${index}`}>
            {column as string}
          </Styled.Column>
        ))}
      </Styled.Row>
    </Styled.Columns>
  );

  return (
    <Styled.Table>
      {columnRow}
      <Styled.Rows>{data.map(onRenderer)}</Styled.Rows>
    </Styled.Table>
  );
}

export const TableRow = Styled.Row;
export const TableCell = Styled.DataCell;
