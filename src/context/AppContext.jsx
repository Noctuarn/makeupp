import { createContext, useReducer } from "react";

import {reducer, basketState} from "../reducer.jsx"


const AppContext = createContext();

const AppProvider = ({children}) => {

    const [basketState, dispatch] = useReducer(reducer, []);

    return(
        <AppContext.Provider value={null}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext};