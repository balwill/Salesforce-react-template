import React from 'react';
import { IconSettings, Input, Button } from '@salesforce/design-system-react'

class Form extends React.Component {
    render() {
        return(
			<div className="slds-box slds-theme_default">

				<h1 className="slds-text-title_caps slds-p-vertical_medium">
					Sample Form
				</h1>
				<Input
					id="Email"
					label="Subscriber Email Address"
					aria-required="TRUE"
					styleContainer={{marginBottom:'10px'}}
				/>

				<Button
					id="Submit"
					label="Submit"
					variant="brand"
					onClick={() => {
						console.log("Button was clicked!")
					}}
				/>
				
			</div>
            
        )
    }
}


export default Form