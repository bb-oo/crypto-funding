function session(state = null, action) {
  switch (action.type) {
    case 'SESSION_STARTED':
      return Object.assign({}, action.payload);
    case 'SESSION_ENDED':
      return null;
    default: 
      return state;
  }
}

export default session;