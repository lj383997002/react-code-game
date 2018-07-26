import React, { Component } from 'react';
import './App.css';
import SelfLayout from './Layout/Layout'
class App extends Component {
  render() {
    return (
      <div className="App">
          <SelfLayout />
      </div>
    );
  }
  test1() {
    console.log('test1111')
    console.log('test')
    console.log('test')
  }
} 

export default App;
