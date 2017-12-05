import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoggingCard from '../LoggingCard';
import Console from '../Console';
import Tasks from '../Tasks';
import './styles.css';
import * as appSagas from '../../sagas/app';

class App extends Component {
  componentDidMount() {
    this.props.start();
  }

  render() {
    return (
      <div className="App">
        <LoggingCard />
        <Tasks />
        <Console />
      </div>
    );
  }
}

const mapState = (state) => ({
});

const mapDispatch = {
  start: appSagas.start,
};

export default connect(mapState, mapDispatch)(App);
