export const ADD_MESSAGE = 'ADD_MESSAGE';

export function actionAddMessage(inputValue) {
  return {
    type: ADD_MESSAGE,
    payload: inputValue,
  };
}
