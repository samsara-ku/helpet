const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

const initialState = {
  uidx: undefined,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action);
      return {
        ...state,
        uidx: action.uidx,
      };
    case LOGOUT:
      return {
        uidx: undefined,
      };
    default:
      return state;
  }
};

export default auth;

export const login = uidx => ({ type: LOGIN, uidx });
export const logout = () => ({ type: LOGOUT });
