import React, { Component } from 'react';
import './App.css';
import InitialPage from './InitialPage.jsx'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <InitialPage />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
