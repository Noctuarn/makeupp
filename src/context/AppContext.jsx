import { createContext, useReducer } from "react";


const AppContext = createContext();

const AppProvider = ({children}) => {

    return(
        <AppContext.Provider value={null}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext};