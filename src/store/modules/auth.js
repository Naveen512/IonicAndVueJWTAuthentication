import { Plugins } from "@capacitor/core";
import axios from "axios";

import { jwtDecrypt } from "../../shared/helper";

const { Storage } = Plugins;

const state = () => ({
  authData: {
    token: "",
    refreshToken: "",
    tokenExp: "",
    userId: "",
    userName: "",
  },
  loginStatus: "success",
});

const getters = {
  getLoginStatus(state) {
    return state.loginStatus;
  },
  getAuthData(state) {
    return state.authData;
  },
};

const actions = {
  async loginUser({ commit }, payload) {
    console.log(payload);
    const response = await axios.post("http://localhost:3000/auth/login", payload);
    if (response.status == 200 || response.status == 201) {
      await Storage.set({
        key: "access_token",
        value: response.data.access_token,
      });
      await Storage.set({
        key: "refresh_token",
        value: response.data.refresh_token,
      });

      commit("saveAuthToken", response.data);
      commit("saveLoginStatus", "success");
    } else {
      commit("saveLoginStatus", "failed");
    }
  },
  async loadStorageTokens({ commit }) {
    const access_token = await await Storage.get({ key: "access_token" });
    const refresh_token = await await Storage.get({ key: "refresh_token" });
    if (access_token && refresh_token) {
      const tokenData = {
        access_token: access_token.value,
        refresh_token: refresh_token.value,
      };
      commit("saveAuthToken", tokenData);
    }
  },
   
  async saveTokensToStorage({commit}, payload){
    await Storage.set({
      key: "access_token",
      value: payload.access_token,
    });
    await Storage.set({
      key: "refresh_token",
      value: payload.refresh_token,
    });
    commit("saveTokenData", payload);
  }
};

const mutations = {
  saveAuthToken(state, payload) {
    const jwtDecodeUserInfo = jwtDecrypt(payload.access_token);
    const newAuthData = {
      token: payload.access_token,
      refreshToken: payload.refresh_token,
      tokenExp: jwtDecodeUserInfo.exp,
      userId: jwtDecodeUserInfo.sub,
      userName: jwtDecodeUserInfo.username,
    };
    state.authData = newAuthData;
  },
  saveLoginStatus(state, status) {
    state.loginStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
