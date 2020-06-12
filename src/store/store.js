import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: process.env.BASE_URL,
    allSelected: [],
    treeCopyright: []
  },

  getters: {},

  mutations: {
    updateSelectedSteps(state, step) {
      const exists = state.allSelected.findIndex(selected => selected.question === step.question);
      if (exists < 0) {
        state.allSelected.push(step);
      } else {
        state.allSelected[exists] = step;
      }
    },
    clearSelectedStep(state) {
      state.allSelected = [];
    },
    updateTree(state, data) {
      state.treeCopyright = data;
    }
  },

  actions: {
    updateSelectedSteps(context, step) {
      context.commit('updateSelectedSteps', step);
    },
    clearSelectedSteps(context) {
      context.commit('clearSelectedStep');
    },
    getTree(context) {
      if (Object.keys(context.state.treeCopyright).length !== 0) return;
      return axios
        .get(context.state.baseUrl + 'tree.json')
        .then(response => {
          context.commit('updateTree', response.data.tree);
        });
    }
  }
});
