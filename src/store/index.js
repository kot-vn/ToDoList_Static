import { getField, updateField } from "vuex-map-fields";
import Vue from "vue";
import Vuex from "vuex";
import authStore from "@/store/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: { getField },
  mutations: { updateField },
  actions: {},
  modules: { authStore },
});
