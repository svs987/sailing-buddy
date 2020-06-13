// store.js
import React, {createContext, useReducer} from 'react';

const initialState = {};
const store = createContext(initialState);const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log('Action is: ', action.type);
      switch (action.type) {
        case 'SET_AUTHENTICATED':
          return 'AUTHENTICATED';
        case 'VALIDATION_FAILED':
          return 'VALIDATION_FAILED';
        default:
          return 'NOT_AUTHENTICATED';
      };
  
    }
  , 'NOT_AUTHENTICATED');

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }