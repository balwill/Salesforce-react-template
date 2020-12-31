import React from 'react';

class FormResult extends React.Component {
    state = {
      Email: this.props.Email
    }
    
    
    render() {
        return (
            <div className="slds-box slds-theme_default" style={{marginBottom:'10px'}}>
                <h1 className="slds-text-heading_small" style={{paddingBottom:'10px'}}>Sample Result</h1>
                <p>{this.state.Email}</p>
            </div>
        )
    }
}

export default FormResult