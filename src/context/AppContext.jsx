import { createContext, useReducer } from "react";

import { reducer } from "../reducer.jsx";
import { GOODS } from "../DATA.js";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const ACTIONS = {
    addItem: "ADD_TO_BASKET",
    removeItem: "REMOVE_FROM_BASKET",
    removeAll: "REMOVE_ALL",
  };

  const [basketState, dispatch] = useReducer(reducer, []);

  const addItemsToBasket = (id) => {
    dispatch({
      type: ACTIONS.addItem,
      payload: { arr: GOODS, idItem: id },
    });
  };

  const removeFromBasket = (id) => {
    dispatch({
      type: ACTIONS.removeItem,
      payload: { arr: GOODS, idItem: id },
    });
  };

  const confirmOrder = () => {
    let result = window.confirm("Бажаєте оформити замовлення ?");

    if (result) {
      dispatch({
        type: ACTIONS.removeAll,
      });
      alert("Дякуємо за підтвердження");
    } else {
      alert("Підтвердження скасовано");
    }
  };

  return (
    <AppContext.Provider
      value={{ basketState, addItemsToBasket, removeFromBasket, confirmOrder }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
