import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useState } from 'react';
import authHelper from '../../../lib/helpers/authHelper';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

const LoginStatusDisplay: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const loginHandler = async () => {
    try {
      setLoading(true);
      setErrors([]);
      await dispatch(authHelper.login('', ''));
    } catch (err) {
      setErrors([(err as Error).message]);
    } finally {
      setLoading(false);
    }
  };

  const logoutHandler = async () => {
    try {
      setLoading(true);
      setErrors([]);
      await dispatch(authHelper.logout());
    } catch (err) {
      setErrors([(err as Error).message]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Button disabled={loading} onClick={logoutHandler}>
          Logout
        </Button>
      ) : (
        <Button disabled={loading} onClick={loginHandler}>
          Login
        </Button>
      )}
      <div>{loading && <CircularProgress />}</div>
      <div>
        {!!errors.length &&
          errors.map((error, index) => <div key={index}>{error}</div>)}
      </div>
    </div>
  );
};

export default LoginStatusDisplay;
