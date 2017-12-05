import { createAction } from 'redux-actions';

const INCREMENT = '@@logs/INCREMENT';
const DECREMENT = '@@logs/DECREMENT';
const SET = '@@logs/SET';

export const increment = createAction(INCREMENT, (x = 1) => x);
export const decrement = createAction(DECREMENT, (x = 1) => x);
export const set = createAction(SET, (x = 0) => x);

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    case SET:
      return action.payload;
    default:
      return state;
  }
};
