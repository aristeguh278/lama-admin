import {createContext, useReducer} from "react"
import DarkModeReducer from "./darkModeReducer";

const INITIL_STATE={
    darkMode:true
}

export const DarkModeContext=createContext(INITIL_STATE);

export const DarkModeContextProvider=({children})=>{
    const [state,dispatch] = useReducer(DarkModeReducer,INITIL_STATE);
    

    return (
        <DarkModeContext.Provider value={{darkMode:state.darkMode,dispatch}}>
         {children}
         </DarkModeContext.Provider>
    )
}