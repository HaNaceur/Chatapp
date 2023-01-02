export const LOGIN = 'LOGIN';

export function actionLogin(email, password) {
  return {
    type: LOGIN,
    payload: { email, password },
  };
}
