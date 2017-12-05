import * as logActions from '../ducks/logs';
import * as woodActions from '../ducks/wood';
import * as logSelectors from '../selectors/logs';

export const chopDownTree = () =>
  async (dispatch, getState) => {
    dispatch(logActions.increment(5));
    const logCount = logSelectors.logCount(getState());
    if (logCount >= 10) {
      dispatch(woodActions.show());
    }
  };
