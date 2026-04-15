import {createStore} from 'redux'; 

//this file name ext is .mjs bcz we r using js not nodes so to inform compiler that it is js code

//initialState

const state= {
    count: 5,
    message: "Hello redux"
}
//reducer
const reducer = (currentState=state , action) => {
    return currentState;
}


//store
const store= createStore(reducer)
console.log("state", store.getState());

//subscribe

//dispatch actions