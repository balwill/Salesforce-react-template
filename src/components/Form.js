import React from 'react';
import { IconSettings, Input, Button } from '@salesforce/design-system-react'
import FormResult from './FormResult'

class Form extends React.Component {
	
	state = {
		Email: '',
		ShowResult: false
	}
	
	formSubmit = (e) => {
		console.log(e.target.value)
	}

	handleEmailChange = (e) => {
		this.setState({Email: e.target.value})
	}

	displayResult = () => {
		this.setState({ShowResult: true})
	}

    render() {
        return(
			<React.Fragment>

				<div className="slds-box slds-theme_default" style={{marginBottom:'10px'}}>

					<h1 className="slds-text-title_caps slds-p-vertical_medium">
						Sample Form
					</h1>
					<Input
						id="Email"
						name="email"
						label="Subscriber Email Address"
						aria-required="TRUE"
						styleContainer={{marginBottom:'10px'}}
						Value={this.state.Email}
						onChange={this.handleEmailChange}
					/>

					<Button
						id="Submit"
						label="Submit"
						variant="brand"
						onClick={() => {
							console.log(this.state.Email)
							this.displayResult()
						}}
					/>
					
				</div>

				{this.state.ShowResult && <FormResult Email={this.state.Email} /> } 
			
			</React.Fragment>

			
            
        )
    }
}


export default Form