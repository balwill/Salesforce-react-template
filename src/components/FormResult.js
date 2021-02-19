import React from 'react';
import DataExtensionTables from './DataExtensionTables';

class FormResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email
    };
  }

  render() {
    return (
      <div
        className="slds-box slds-theme_default"
        style={{ marginBottom: '10px' }}
      >
        <h1
          className="slds-text-heading_small"
          style={{ paddingBottom: '10px' }}
        >
          Sample Result
        </h1>
        <p>{this.state.email}</p>
        <DataExtensionTables />
      </div>
    );
  }
}

export default FormResult;
