import React from 'react';
import { Component } from 'react';
import { Table } from 'react-bootstrap';

export interface DynamicTableProps {
  schema: DynamicSchema;
  records: any[];
  onClick?: (record: any) => void;
}

export interface DynamicSchema {
  [key: string]: {
    name: string;
    primaryKey?: boolean;
    onClick?: (records: any[]) => void;
  };
}

export class DynamicTable extends Component<DynamicTableProps> {
  columnsHeader() {
    const columnsElement = [];

    for (const [key, column] of Object.entries(this.props.schema)) {
      columnsElement.push(
        <th scope="col" key={'col_' + key}>
          {column.name}
        </th>,
      );
    }

    return <tr>{columnsElement}</tr>;
  }

  onClick = (record: any) => {
    if (this.props.onClick) {
      this.props.onClick(record);
    }

    return;
  };

  records() {
    let rowsElement = [];
    const records: JSX.Element[] = [];

    this.props.records.forEach((row, index) => {
      rowsElement = [];
      for (const [key, column] of Object.entries(this.props.schema)) {
        if (column.primaryKey) {
          rowsElement.push(
            <th
              scope="row"
              key={key}
              onClick={() => {
                if (column.onClick) {
                  column.onClick(this.props.records);
                }
              }}
            >
              {column.name}
            </th>,
          );
        } else if (row.hasOwnProperty(key)) {
          rowsElement.push(<td key={key}>{row[key].toString()}</td>);
        }
      }
      records.push(
        <tr key={'tr_' + index.toString()} onClick={() => this.onClick(row)}>
          {rowsElement}
        </tr>,
      );
    });

    return records;
  }

  render() {
    return (
      <Table responsive="sm" hover className={'align-content-center'}>
        <thead className={'table-light'}>{this.columnsHeader()}</thead>
        <tbody>{this.records()}</tbody>
      </Table>
    );
  }
}
