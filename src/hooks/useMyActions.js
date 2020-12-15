import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { increment, decrement } from '../modules/counter';

const CounterActions = () => {
  const dispatch = useDispatch();

  const increase = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const decrease = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  return { increase, decrease };
};

export default CounterActions;

export { CounterActions };
