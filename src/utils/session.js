// GET ITEM BY KEY
export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// SET ITEM (KEY, VALUE)
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// DELETE ITEM BY KEY
export const deleteItem = (key) => {
  localStorage.removeItem(key);
};
