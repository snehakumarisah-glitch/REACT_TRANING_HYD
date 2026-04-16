export type AuthState = {
    isAuththenticated: boolean;
    username: string;
    accessToken: string;
    refreshToken: string;
}

const initialState : AuthState = {
    isAuththenticated: false,accessToken: "",refreshToken: "", username: ""
}


export type AuthAction = {
    type: string;
    payload?: AuthState;
}


//login action => {type: "login", payload: AuthState}
// log action => {type: logout}
export const authReducer = (state=initialState, action) => {
    if(action.type==="login" && action.payload){
        return action.payload;
    } 
    if(action.type==="logout"){
        return initialState;
    }
    return state;
}