import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: process.env.BASE_URL,
    allSelected: [],
    treeCopyright: [],
    result: null,
    theme: null
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
    removeStep(state) {
      state.allSelected.splice(-1, 1);
    },
    clearSelectedStep(state) {
      state.allSelected = [];
    },
    setResultText(state, result) {
      state.result = result;
    },
    updateTree(state, data) {
      state.treeCopyright = data;
    }
  },

  actions: {
    updateSelectedSteps(context, step) {
      context.commit('updateSelectedSteps', step);
    },
    setResult(context, result) {
      context.commit('setResultText', result);
    },
    removeStep(context) {
      context.commit('removeStep');
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
