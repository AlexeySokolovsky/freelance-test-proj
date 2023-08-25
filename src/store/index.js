import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    formData: [],
    active: 0,
  },
  getters: {
    getData(state) {
      return state.formData;
    },
    getActiveTask(state) {
      state.active = 0;
      state.formData.forEach((item) => {
        item.status === "active" ? (state.active += 1) : (state.active += 0);
      });

      return state.active;
    },
  },
  mutations: {
    addData(state, newData) {
      state.formData.push(newData);
    },
    addStatusJob(state, newData) {
      state.formData.find((item) => item.id == newData.currentRoute).status =
        newData.status;
    },
    deleteTask(state, newData) {
      state.formData = state.formData.filter((item) => item.id != newData);
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
