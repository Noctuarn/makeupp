export const reducer = (basketState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_BASKET":
      const updateAddData = payload.arr.find((el) => el.id === payload.idItem);
      return [...basketState, updateAddData];

      case "REMOVE_FROM_BASKET":
        const updateRemoveData = basketState.filter((el) => {
            return el.id !== payload.idItem;
        })

        return updateRemoveData;

    default:
      return basketState;
  }
};
