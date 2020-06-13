// store.js
import React, {createContext, useReducer} from 'react';

const initialState = {authenticated: 'AUTHENTICATED'};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log('Action is: ', action.type);
    console.log('State is: ', state);
      switch (action.type) {
        case 'SET_AUTHENTICATED':
          return {...state, authenticated: 'AUTHENTICATED'};
        case 'VALIDATION_FAILED':
          return {...state, authenticated: 'VALIDATION_FAILED'};
        default:
          return {...state, authenticated: 'NOT_AUTHENTICATED'};
      };
  
    }
  , { authenticated:'NOT_AUTHENTICATED'});

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }