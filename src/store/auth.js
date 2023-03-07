import { getField, updateField } from "vuex-map-fields";

export default {
  namespaced: true,
  strict: true,
  state: {
    username: "",
    email: "",
    password: "",
    rePassword: "",
    form: "login",
  },
  getters: { getField },
  mutations: { updateField },
  actions: {},
  modules: {},
};
