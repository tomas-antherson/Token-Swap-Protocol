export const validateName = (name) => {
  const regex = /^[A-Za-z\- ]{3,50}$/;
  return regex.test(name);
};

export const validateEmail = (email) => {
  const regex = /^[\w.-]+@[a-zA-Z\d-]+\.[cC][oO][mM]$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  const regex = /^[a-zA-Z0-9]{6,30}$/;
  return regex.test(password);
};
