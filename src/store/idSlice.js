import { color } from "./colorSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  // Save specific state to localStorage after each action
  if (action.type === color.type) {
    const { color } = store.getState().color;
    localStorage.setItem("color", color);
  }
  return result;
};

export default localStorageMiddleware;
