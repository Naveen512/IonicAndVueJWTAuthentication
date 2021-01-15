import {createStore} from 'vuex';
import AuthModule from './modules/auth';

const store = createStore({
    modules:{
        auth:AuthModule
    }
});

export default store;