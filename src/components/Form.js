import React from 'react';
import { IconSettings, Input, Button } from '@salesforce/design-system-react';
import FormResult from './FormResult';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      showResult: false
    };
  }

  formSubmit = (e) => {
    console.log(e.target.value);
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  displayResult = () => {
    this.setState({ showResult: true });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="slds-box slds-theme_default"
          style={{ marginBottom: '10px' }}
        >
          <h1 className="slds-text-title_caps slds-p-vertical_medium">
            Sample Form
          </h1>
          <Input
            id="Email"
            name="email"
            label="Subscriber Email Address"
            aria-required="TRUE"
            styleContainer={{ marginBottom: '10px' }}
            Value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <Button
            id="Submit"
            label="Submit"
            variant="brand"
            onClick={() => {
              console.log(this.state.email);
              this.displayResult();
            }}
          />
        </div>

        {this.state.showResult && <FormResult email={this.state.email} />}
      </React.Fragment>
    );
  }
}

export default Form;
