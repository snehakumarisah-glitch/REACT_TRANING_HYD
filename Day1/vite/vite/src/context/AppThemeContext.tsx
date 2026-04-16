import React, { useState } from "react";
import type { JSX } from "react/jsx-runtime";


export type ThemeState = {
    mode: string,
    changeMode: (mode:string) => void
} 

export const initialState: ThemeState = {
    mode: 'light',
    changeMode: (mode:string) => {}

}
export const AppThemeContext = React.createContext(initialState)

type AppThemeProviderProps = {
    children: JSX.Element
}
//use to integrate context to react
export function AppThemeProvider(props: AppThemeProviderProps){

    const [mode, setMode] = useState(initialState.mode); 
    return(
        <AppThemeContext.Provider value={{mode, changeMode: setMode}}> 
         {props.children}
        </AppThemeContext.Provider>
    )
}