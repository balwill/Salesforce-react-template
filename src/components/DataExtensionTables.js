import React, { Component } from 'react';
import {
  Card,
  Icon,
  DataTable,
  CardEmpty,
  DataTableColumn
} from '@salesforce/design-system-react';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

const sampleItems = [
  {
    id: '1',
    Name: 'Item #1',
    Description: 'This is a sample description'
  },
  {
    id: '2',
    Name: 'Item #2',
    Description: 'This is a sample description'
  },
  {
    id: '3',
    Name: 'Item #3',
    Description: 'This is a sample description'
  }
];

export default class DataExtensionTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: sampleItems
    };
  }

  render() {
    return (
      <Card
        heading="Sample Results"
        icon={<Icon category="standard" name="account" size="small" />}
      >
        <DataTable items={this.state.items}>
          <DataTableColumn label="Name" property="Name" truncate />
          <DataTableColumn
            label="Description"
            property="Description"
            truncate
          />
        </DataTable>
      </Card>
    );
  }
}
