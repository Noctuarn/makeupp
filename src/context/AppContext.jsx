import { createContext, useReducer } from "react";

import {reducer} from "../reducer.jsx"
import { GOODS } from "../DATA.js";


const AppContext = createContext();

const AppProvider = ({children}) => {

    const ACTIONS = {
        addItem: "ADD_TO_BASKET",
        
    }

    const [basketState, dispatch] = useReducer(reducer, []);

    const addItemsToBasket = (id) => {
        dispatch({
            type: ACTIONS.addItem,
            payload: {arr: GOODS, idItem: id}
        })
    }
    
    return(
        <AppContext.Provider value={{basketState, addItemsToBasket}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext};