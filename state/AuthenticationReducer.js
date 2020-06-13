const authenticationReducer = (state, action) => {
  console.log('Action is: ', action.type);
    switch (action.type) {
      case 'SET_AUTHENTICATED':
        return 'AUTHENTICATED';
      case 'VALIDATION_FAILED':
        return 'VALIDATION_FAILED';
      default:
        return 'NOT_AUTHENTICATED';
    }

  }

 export {authenticationReducer};