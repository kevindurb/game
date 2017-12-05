import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import * as logSagas from '../../sagas/logs';

class LoggingCard extends React.PureComponent {
  render() {
    return (
      <div className="LoggingCard">
        <div className="total">
          {this.props.logs}
        </div>
        <button onClick={this.props.onChopTree}>Chop down tree</button>
      </div>
    );
  }
}

const mapState = () => {
  return (state) => ({
    logs: state.logs,
  });
};

const mapDispatch = {
  onChopTree: logSagas.chopDownTree,
};

export default connect(mapState, mapDispatch)(LoggingCard);
