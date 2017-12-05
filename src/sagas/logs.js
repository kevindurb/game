import * as logActions from '../ducks/logs';

export const chopDownTree = () =>
  async (dispatch) => {
    dispatch(logActions.increment());
  };
