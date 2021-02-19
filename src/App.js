import React from 'react';
import AppHeader from './components/AppHeader';
import Form from './components/Form';
import About from './components/About';
import { BrowserRouter, Route } from 'react-router-dom';
import { BrandBand } from '@salesforce/design-system-react';
import { connect } from 'react-redux';

const mapStoreToProps = (state) => {
  return {
    // select the props you want to pull from your Store
    // Example:
    // posts: state.posts
  };
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <BrandBand>
          {/* Add stuff inside the div tags */}
          <div style={{ margin: '2em 5em 0 5em' }}>
            <AppHeader />
            <Route exact path="/">
              <Form />
            </Route>

            <Route path="/about">
              <About />
            </Route>
          </div>
        </BrandBand>
      </BrowserRouter>
    );
  }
}

export default connect(mapStoreToProps)(App);
