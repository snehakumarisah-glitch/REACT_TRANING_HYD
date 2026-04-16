import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {authReducer} from './authReducer';
import { gadgetReducer } from './gadgetReducer';

// this file is generated to worksimilar like redux-demo.mjs but here we use type script\

//store can hv multiple reducer hving chunks of information
const reducer = combineReducers({
    auth: authReducer,
    gadget: gadgetReducer
})


export const store = configureStore({reducer: reducer});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof  store.dispatch;
