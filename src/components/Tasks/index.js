import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

class Tasks extends React.PureComponent {
  render() {
    return (
      <div className="Tasks">
      </div>
    );
  }
}

const mapState = (state) => ({
});

const mapDispatch = {
};

export default connect(mapState, mapDispatch)(Tasks);
