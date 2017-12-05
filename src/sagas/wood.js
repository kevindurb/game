import * as woodSelectors from '../selectors/wood';
import * as woodActions from '../ducks/wood';

export const showWood = () =>
  async (dispatch, getState) => {
    const shown = woodSelectors.showWood(getState());
    if (!shown) {
      dispatch(woodActions.show());
    }
  };
