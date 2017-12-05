import * as logActions from '../ducks/logs';
import * as woodActions from '../ducks/wood';
import * as woodSagas from '../sagas/wood';
import * as logSelectors from '../selectors/logs';
import * as consoleActions from '../ducks/console';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const chopDownTree = () =>
  async (dispatch, getState) => {
    const logs = getRandomInt(1, 6);
    dispatch(logActions.increment(logs));

    const logCount = logSelectors.logCount(getState());
    if (logCount >= 20) {
      dispatch(woodSagas.showWood());
      dispatch(consoleActions.pushMessage(
        `I wonder if you could use those logs if you cut them into wood pieces...`,
      ));
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
