import { createAction } from 'redux-actions';
import update from 'immutability-helper';

const SHOW = '@@wood/SHOW';

export const show = createAction(SHOW);

const initialState = {
  show: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return update(state, {
        show: { $set: true },
      });
    default:
      return state;
  }
};
