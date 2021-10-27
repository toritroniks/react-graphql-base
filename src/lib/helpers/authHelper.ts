import { AppDispatch } from '../../store';
import { authActions } from '../../store/slices/authSlice';

export default class AuthHelper {
  static login =
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      await delay(2);
      dispatch(authActions.login());
    };

  static logout = () => async (dispatch: AppDispatch) => {
    await delay(2);
    dispatch(authActions.logout());
  };
}

function delay(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
