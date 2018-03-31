function session(state = { loggedIn: false }, action) {
  switch (action.type) {
    case 'SESSION_STARTED':
      return Object.assign({}, { loggedIn: true }, action.payload);
    case 'SESSION_ENDED':
      return Object.assign({}, {  loggedIn: false});
    default: 
      return state;
  }
}

export default session;