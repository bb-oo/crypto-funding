const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export const isZip = zip => zipRegex.test(zip);

export const validateEtherAmount = goal => {
  if (goal < 1) return 'Must be a positive amount.';
  if (goal > 100000) return 'You exceeded the maximum.';
  return null;
};

export const validateText = title => {
  const { length } = title;
  if (length > 35) return 'Must be less than 36 characters.';
  if (!length) return 'What do you want your text to be?';
  if (length < 2) return 'Must be greater than 1 character.';
  return null;
};

