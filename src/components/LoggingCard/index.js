import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import * as logSagas from '../../sagas/logs';
import * as logSelectors from '../../selectors/logs';
import * as woodSelectors from '../../selectors/wood';

class LoggingCard extends React.PureComponent {
  renderProcessLogsButton() {
    if (this.props.showWood) {
      return (
        <button onClick={this.props.onProcessLogs}>Process logs</button>
      );
    }
  }

  renderWoodStat() {
    if (this.props.showWood) {
      return (
        <div className="woodStat">
          <div className="number">{this.props.wood}</div>
          <div className="label">Wood</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="LoggingCard">
        <div className="statHolder">
          <div className="logsStat">
            <div className="number">{this.props.logs}</div>
            <div className="label">Logs</div>
          </div>
          {this.renderWoodStat()}
        </div>
        <button onClick={this.props.onChopTree}>Chop down tree</button>
        {this.renderProcessLogsButton()}
      </div>
    );
  }
}

const mapState = (state) => ({
  logs: logSelectors.logCount(state),
  showWood: woodSelectors.showWood(state),
  wood: woodSelectors.woodCount(state),
});

const mapDispatch = {
  onChopTree: logSagas.chopDownTree,
  onProcessLogs: logSagas.processLogs,
};

export default connect(mapState, mapDispatch)(LoggingCard);
