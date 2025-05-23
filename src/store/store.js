// store.js

import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state() {
    return {
      baseUrl: process.env.BASE_URL,
      allSelected: [],
      treeCopyright: [],
      result: null,
      modelovereenkomst: null,
      outofcommerce: null,
      cbo: null,
      note: null,
      theme: null,
      isMultiple: false,
      multipleComponentNo: 0,
      multipleComponents: [],
      showNextSteps: false
    };
  },

  getters: {},

  mutations: {
    updateSelectedSteps(state, step) {
      const exists = state.allSelected.findIndex(selected => selected.question === step.question);
      const currentMultiple = state.multipleComponents[state.multipleComponents.length - 1];

      if (state.isMultiple && step.selected !== 'moreMultipleWorks') {
        const existsMultiple = currentMultiple.steps.findIndex(multipleSelected => multipleSelected.question === step.question);

        if (state.isMultiple && state.multipleComponentNo > 0) {
          if (step.question !== 'makerIsMoreMultipleWork') {
            if (existsMultiple < 0) {
              currentMultiple.steps.push(step);
            } else {
              currentMultiple.steps[existsMultiple] = step;
            }
          }
        }
      } else {
        if (exists < 0) {
          state.allSelected.push(step);
        } else {
          state.allSelected[exists] = step;
        }
      }
    },
    removeStep(state) {
      state.allSelected.splice(-1, 1);
    },
    removeComponent(state) {
      state.multipleComponents.splice(-1, 1);
      state.multipleComponentNo--;
    },
    removeStepComponent(state) {
      state.multipleComponents[state.multipleComponents.length - 1].steps.splice(-1, 1);
    },
    clearSelectedSteps(state) {
      state.result = null;
      state.isMultiple = false;
      state.multipleComponentNo = 0;
      state.multipleComponents = [];
      state.allSelected = [];
    },
    setResultText(state, result) {
      if (state.isMultiple && state.multipleComponentNo > 0) {
        const currentMultiple = state.multipleComponents[state.multipleComponents.length - 1];
        currentMultiple.result = result;
      }
      state.result = result;
    },
    setOutofcommerceText(state, result) {
      state.outofcommerce = result;
    },
    setModelovereenkomstText(state, result) {
      state.modelovereenkomst = result;
    },
    setCBOText(state, result) {
      state.cbo = result;
    },
    setNoteText(state, result) {
      state.note = result;
    },
    showNextSteps(state, result) {
      state.showNextSteps = result;
    },
    isMultipleMakersMultipleWorks(state, result) {
      state.isMultiple = result;
    },
    setNameMultipleMakersMultipleWorks(state, result) {
      state.multipleComponentNo++;
      state.multipleComponents.push({ name: result, steps: [], result: null });
    },
    updateTree(state, data) {
      state.treeCopyright = data;
    }
  },

  actions: {
    updateSelectedSteps({ commit }, step) {
      commit('updateSelectedSteps', step);
    },
    setResult({ commit }, result) {
      commit('setResultText', result);
    },
    setOutofcommerce({ commit }, result) {
      commit('setOutofcommerceText', result);
    },
    setModelovereenkomst({ commit }, result) {
      commit('setModelovereenkomstText', result);
    },
    setCBO({ commit }, result) {
      commit('setCBOText', result);
    },
    setNote({ commit }, result) {
      commit('setNoteText', result);
    },
    setNextSteps({ commit }, result) {
      commit('showNextSteps', result);
    },
    removeStep({ commit }) {
      commit('removeStep');
    },
    removeComponent({ commit }) {
      commit('removeComponent');
    },
    removeStepComponent({ commit }) {
      commit('removeStepComponent');
    },
    clearSelectedSteps({ commit }) {
      commit('clearSelectedSteps');
    },
    setMultipleMakersMultipleWorks({ commit }, result) {
      commit('isMultipleMakersMultipleWorks', result);
    },
    setNameMultipleMakersMultipleWorks({ commit }, result) {
      if (result) {
        commit('setNameMultipleMakersMultipleWorks', result);
      }
    },
    getTree({ commit, state }) {
      if (Object.keys(state.treeCopyright).length !== 0) return;
      return axios
        .get(state.baseUrl + 'tree.json')
        .then(response => {
          commit('updateTree', response.data.tree);
        });
    }
  }
});
