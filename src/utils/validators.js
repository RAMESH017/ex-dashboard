export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validateRequired = (value) => {
  if (value === null || value === undefined) return false;
  return String(value).trim().length > 0;
};

export const validatePositiveNumber = (value) => {
  const num = Number(value);
  return !isNaN(num) && num >= 0;
};