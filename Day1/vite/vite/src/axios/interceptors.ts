import axios, {type InternalAxiosRequestConfig} from 'axios';
import {store} from '../redux/store';


axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {

    const loginRequestUrl = "http://localhost:9000/login";

    if(config.url !== loginRequestUrl && config.url?.startsWith("http://localhost:9000/")){
        const reduxState = store.getState();
        config.headers.Authorization = `Bearer ${reduxState.auth.accessToken}`;
    } 

    // to do excercise
    //do api call to get access token if access token expires it will give 403 
    // then get new aceess token using reresh token as body and store in redux


    return config;

})