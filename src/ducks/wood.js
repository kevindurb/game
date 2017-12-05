import { createAction } from 'redux-actions';
import update from 'immutability-helper';

const SHOW = '@@wood/SHOW';
const INCREMENT = '@@wood/INCREMENT';

export const show = createAction(SHOW);
export const increment = createAction(INCREMENT, (x = 1) => x);

const initialState = {
  show: false,
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return update(state, {
        show: { $set: true },
      });
    case INCREMENT:
      return update(state, {
        count: { $apply: x => x + action.payload },
      });
    default:
      return state;
  }
};
