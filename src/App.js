import React from 'react';
import AppHeader from './components/AppHeader';
import Form from './components/Form';
import {BrowserRouter, Route} from 'react-router-dom';
import { BrandBand } from '@salesforce/design-system-react';



class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<BrandBand>
					{/* Add stuff inside the div tags */}
					<div style={{margin: '10px'}}>
					<AppHeader />
						<Route exact path="/">
							<Form />
						</Route>

						<Route path="/about">
							<div className="slds-box slds-theme_default">
								<div className="slds-grid slds-gutters">
									<div className="slds-box slds-col" style={{backgroundColor: 'white'}}>
										<span>1</span>
									</div>
									<div className="slds-box slds-col" style={{backgroundColor: 'white'}}>
										<span>2</span>
									</div>
								</div>
							</div>
						</Route>
					</div>	
				</BrandBand>			
			</BrowserRouter>
			
		);
	}
}

export default App