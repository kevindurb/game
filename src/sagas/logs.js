import * as logActions from '../ducks/logs';
import * as woodActions from '../ducks/wood';
import * as woodSagas from '../sagas/wood';
import * as logSelectors from '../selectors/logs';

export const chopDownTree = () =>
  async (dispatch, getState) => {
    dispatch(logActions.increment(5));
    const logCount = logSelectors.logCount(getState());
    if (logCount >= 10) {
      dispatch(woodSagas.showWood());
    }
  };

export const processLogs = () =>
  async (dispatch, getState) => {
    const logCount = logSelectors.logCount(getState());
    if (logCount > 10) {
      dispatch(logActions.decrement(10));
      dispatch(woodActions.increment(5));
    }
  };
