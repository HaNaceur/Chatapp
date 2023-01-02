import { LOGIN } from '../actions/settingsActions';

export const initialState = {
  email: '',
  password: '',
  isConnected: false,
};

function settingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isConnected: true,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    default:
      return state;
  }
}

export default settingsReducer;
