import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { login, logout } from '../modules/auth';

const AuthActions = () => {
  const dispatch = useDispatch();

  const signin = useCallback(
    uidx => {
      dispatch(login(uidx));
    },
    [dispatch]
  );

  const signout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return { signin, signout };
};

export default AuthActions;

export { AuthActions };
