// store.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  authenticated: 'AUTHENTICATED',
  termsaccepted: 'NOT_ACCEPTED',
  authPageCompleted: 'NOT_COMPLETED'
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log('Action is: ', action.type);
    console.log('State is: ', state);
    switch (action.type) {
      case 'SET_AUTHENTICATED':
        return { ...state, authenticated: 'AUTHENTICATED' };
      case 'VALIDATION_FAILED':
        return { ...state, authenticated: 'VALIDATION_FAILED' };
      case 'TOGGLE_TERMS_ACCEPTED':
        if (state.termsaccepted == 'ACCEPTED') {
          return { ...state, termsaccepted: 'NOT_ACCEPTED_FAIL' };

        } else {
          return { ...state, termsaccepted: 'ACCEPTED' };
        }
        case 'SET_TERMS_NOT_ACCEPTED':
          return { ...state, termsaccepted: 'NOT_ACCEPTED_FAIL' };
         
      case 'SET_AUTH_PAGE_COMPLETED':
        return { ...state, authPageCompleted: 'COMPLETED' };
      default:
        return { ...state, authenticated: 'NOT_AUTHENTICATED' };
    };

  }
    , initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }