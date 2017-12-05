import * as consoleActions from '../ducks/console';

const delay = (t) => new Promise((r) => setTimeout(r, t));

export const startSecondPerson = () =>
  async (dispatch) => {
    await delay(1000);
    dispatch(consoleActions.pushMessage(
      'hello...?',
    ));

    await delay(3000);
    dispatch(consoleActions.pushMessage(
      'where are we???',
    ));

    await delay(3000);
    dispatch(consoleActions.pushMessage(
      'all I see is a bunch of trees around us...',
    ));

    await delay(3000);
    dispatch(consoleActions.pushMessage(
      'I think I heard something... but its so dark.',
    ));

    await delay(3000);
    dispatch(consoleActions.pushMessage(
      'chop down some wood, maybe we could get a fire going.',
    ));
  };

export const start = () =>
  async (dispatch) => {
    dispatch(startSecondPerson());
  };
