import { useSelector } from 'react-redux';

function useAuth() {
  const state = useSelector(state => state.auth);

  return state;
}

export default useAuth;
export { useAuth };
