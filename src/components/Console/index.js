import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import * as consoleSelectors from '../../selectors/console';

class Console extends React.PureComponent {
  render() {
    return (
      <div className="Console">
        {
          this.props.messages.map((message, index) => (
            <div key={index}>&gt; {message}</div>
          ))
        }
      </div>
    );
  }
}

const mapState = (state) => ({
  messages: consoleSelectors.messages(state),
});

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Console);
