import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar   from './components/layout/Navbar';
import Footer   from './components/layout/Footer';
import Landing  from './components/layout/Landing';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={ Landing } />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
