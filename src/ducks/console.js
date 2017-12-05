import { createAction } from 'redux-actions';

const PUSH_MESSAGE = '@@console/PUSH_MESSAGE';

export const pushMessage = createAction(PUSH_MESSAGE);

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case PUSH_MESSAGE:
      return [
        action.payload,
        ...state,
      ];
    default:
      return state;
  }
};
