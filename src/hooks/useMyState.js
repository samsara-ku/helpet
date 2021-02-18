import { useSelector } from 'react-redux';

function useCounter() {
  const state = useSelector(state => state.counter);

  return state;
}

export default useCounter;
export { useCounter };
