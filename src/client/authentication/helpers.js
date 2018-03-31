const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmail = email => emailRegex.test(email.trim());

const usernameRegex = /[\W_]/g;

export const validateUsername = username => {
  const { length } = username;
  if (!length) return 'Invalid username.';
  if (length > 63) return 'Invalid username.';
  if (length < 4) return 'Invalid username.';
  if (usernameRegex.test(username)) return 'Invalid username.';
  return null;
};

export const validatePassword = password => {
  const { length } = password;
  if (!length || password.includes(' ')) return 'Invalid password.';
  if (length < 6) return 'Invalid password.';
  if (length > 25) return 'Invalid password.'
  return null;
};
