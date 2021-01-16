import {createStore} from 'vuex';
import AuthModule from './modules/auth';
import TodoModule from './modules/todo';

const store = createStore({
    modules:{
        auth:AuthModule,
        todo:TodoModule
    }
});

export default store;