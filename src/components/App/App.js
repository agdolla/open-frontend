import React, { Component } from 'react';
import Header from '../Header';
import Project from '../Project';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <div className="featured">This is a featured post.</div>
          <div>This is a regular post.</div>
          <div>This is a another regular post.</div>
          <div>This is a yet another regular post.</div>
          <div>This is one more regular post.</div>
          <div>This is just one more regular post.</div>
          <div>This is a regular post.</div>
        </main>
      </div>
    );
  }
}

export default App;
