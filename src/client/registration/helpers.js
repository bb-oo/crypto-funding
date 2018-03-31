const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmail = email => emailRegex.test(email.trim());

const usernameRegex = /[\W_]/g;

export const validateUsername = username => {
  const { length } = username;
  if (!length) return 'Please choose a username.';
  if (length > 63) return 'Usernames cannot be more than 63 characters.';
  if (length < 4) return 'Your username must be at least 4 characters long.';
  if (usernameRegex.test(username)) return 'Usernames can only contain letters and numbers.';
  return null;
};

export const validatePassword = password => {
  const { length } = password;
  if (!length || password.includes(' ')) return 'What do you want your password to be?';
  if (length < 6) return 'Password must be at least 6 characters.';
  if (length > 25) return 'Password must be less than 26 characters.'
  return null;
};
