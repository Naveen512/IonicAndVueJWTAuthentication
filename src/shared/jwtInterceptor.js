import axios from "axios";
import store from '../store/index';
 
const jwtInterceptor = axios.create({});
 
jwtInterceptor.interceptors.request.use(config => {
    const authData = store.getters['auth/getAuthData'];
    if(authData == null){
        return config;
    }
    const isTokenActive = authData.tokenExp * 1000 > Date.now();
    if(isTokenActive){
        config.headers.common["Authorization"] = `bearer ${authData.token}` ;
        return config;
    }
    else{
        const payload ={
            access_token: authData.token,
            refresh_token:authData.refreshToken
        };
        store.dispatch("auth/refreshToken",payload)
        .then(() => {
            return jwtInterceptor(config);
        },error => {
            config.log(error);
            return jwtInterceptor(config);
        });
    }
 
});
export default jwtInterceptor;