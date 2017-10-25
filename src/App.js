import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from './Tab';
import Heure from './Component/Heure/Heure';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <Heure />
          <h2>Welcome to React</h2>
        </div>
        <br />
        <Tab />
        <br />
        <div className="App">
          <div className="App-header">
            <h2>SUDOKU</h2>
            <div className="placement">
              <div className="containt">
                <div className="Cercle _3">
                  <div className="_5" />
                </div>
                <div className="Cercle _2">
                  <div className="_6" />
                </div>
                <div className="Cercle _1">
                  <div className="_7" />
                </div>
                <div className="Cercle _4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
