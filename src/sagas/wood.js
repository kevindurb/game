import * as woodSelectors from '../selectors/wood';
import * as woodActions from '../ducks/wood';
import * as consoleActions from '../ducks/console';

export const showWood = () =>
  async (dispatch, getState) => {
    const shown = woodSelectors.showWood(getState());
    if (!shown) {
      dispatch(woodActions.show());
      dispatch(consoleActions.pushMessage(
        `I wonder if you could use those logs if you cut them into wood pieces...`,
      ));
    }
  };
