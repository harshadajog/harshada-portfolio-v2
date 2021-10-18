import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page';
import Footer from './components/Footer/Footer';



class App extends React.Component {
  constructor() {
    super();
    this.state = { menuActive: false }
  }

  setMenuActive = (state) => {
    this.setState(state);
  }

  render() {
    return (
      <div className="app">
        <Header></Header>
        <Router>
          <Navbar menuActive={this.state.menuActive}></Navbar>
          <Page setMenuActive={this.setMenuActive} />
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;