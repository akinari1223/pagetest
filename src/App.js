import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderInBrowser from 'react-render-in-browser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RenderInBrowser ie only>
        <div>Ugh, our super duper animation won't work in IE</div>
      </RenderInBrowser>
      <RenderInBrowser except firefox safari>
        <div>Why don't you use Firefox or Safari?</div>
      </RenderInBrowser>
      <RenderInBrowser chrome firefox only>
        <div>I like Chrome and Firefox</div>
      </RenderInBrowser>
      </div>
    );
  }
}

export default App;
