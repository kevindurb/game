import * as logActions from '../ducks/logs';
import * as woodActions from '../ducks/wood';
import * as woodSagas from '../sagas/wood';
import * as logSelectors from '../selectors/logs';
import * as consoleActions from '../ducks/console';

const delay = (t) => new Promise((r) => setTimeout(r, t));

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const chopDownTree = () =>
  async (dispatch, getState) => {
    const logs = getRandomInt(1, 6);

    for (let i = 0; i < logs; i++) {
      await delay(200);
      dispatch(logActions.increment(1));
    }

    const logCount = logSelectors.logCount(getState());
    if (logCount >= 100) {
      dispatch(woodSagas.showWood());
    }
  };

export const processLogs = () =>
  async (dispatch, getState) => {
    const logCount = logSelectors.logCount(getState());
    if (logCount >= 10) {
      dispatch(logActions.decrement(10));
      dispatch(woodActions.increment(5));
    }
  };
