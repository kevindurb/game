import React, { Component } from 'react';
import LoggingCard from '../LoggingCard';
import Console from '../Console';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoggingCard />
        <Console />
      </div>
    );
  }
}

export default App;
