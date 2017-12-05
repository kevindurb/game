import { createAction } from 'redux-actions';

const PUSH_TASK = '@@tasks/PUSH_TASK';

export const pushTask = createAction(PUSH_TASK);

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case PUSH_TASK:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

