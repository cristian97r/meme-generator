import React, { Component } from 'react';
import './App.css';
import Header from'./components/Header'
import Memegenerator from'./components/MemeGenerator'

class App extends Component {
  render() {
    return (
      <div>
        < Header />
        < Memegenerator />
      </div>
    );
  }
}

export default App;
