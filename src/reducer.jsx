export const reducer = (basketState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_BASKET":
      const newItem = payload.arr.find((el) => el.id === payload.idItem);

      return [...basketState, newItem];

    default:
      return basketState;
  }
};
