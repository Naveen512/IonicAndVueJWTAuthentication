import jwtInterceptor from '../../shared/jwtInterceptor';

const store = () => ({
  todos: [],
});

const getters = {
  getAllTodos(state) {
    return state.todos;
  },
};

const actions = {
  async fetchTodos({ commit }) {
    var response = await jwtInterceptor.get("http://localhost:3000/todos");
    commit("saveAllTodos", response.data);
  },
};

const mutations = {
  saveAllTodos(state, payload) {
    state.todos = payload;
  },
};

export default {
  namespaced: true,
  store,
  getters,
  actions,
  mutations,
};
