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
    orphaned: null,
    outofcommerce: null,
    cbo: null,
    note: null,
    theme: null,
    isMultiple: false,
    multipleComponentNo: 0,
    multipleComponents: [],
    showNextSteps: false
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

      // add steps to local storage for duration of this session
      // sessionStorage.setItem('copyright-steps-all', JSON.stringify(state.allSelected));
      // sessionStorage.setItem('copyright-steps-multiple', JSON.stringify(state.multipleComponents));
    },
    removeStep(state) {
      state.allSelected.splice(-1, 1);
      // sessionStorage.setItem('copyright-steps-all', JSON.stringify(state.allSelected));
    },
    removeComponent(state) {
      state.multipleComponents.splice(-1, 1);
      state.multipleComponentNo--;
    },
    removeStepComponent(state) {
      state.multipleComponents[state.multipleComponents.length - 1].steps.splice(-1, 1);
      // sessionStorage.setItem('copyright-steps-multiple', JSON.stringify(state.multipleComponents));
    },
    clearSelectedSteps(state) {
      state.result = null;
      state.isMultiple = false;
      state.multipleComponentNo = 0;
      state.multipleComponents = [];
      state.allSelected = [];
      // sessionStorage.removeItem('copyright-steps-all');
      // sessionStorage.removeItem('copyright-steps-multiple');
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
    setOrphanedText(state, result) {
      state.orphaned = result;
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
      state.multipleComponents.push({ 'name': result, 'steps': [], 'result': null });
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
    setOutofcommerce(context, result) {
      context.commit('setOutofcommerceText', result);
    },
    setOrphaned(context, result) {
      context.commit('setOrphanedText', result);
    },
    setCBO(context, result) {
      context.commit('setCBOText', result);
    },
    setNote(context, result) {
      context.commit('setNoteText', result);
    },
    setNextSteps(context, result) {
      context.commit('showNextSteps', result);
    },
    removeStep(context) {
      context.commit('removeStep');
    },
    removeComponent(context) {
      context.commit('removeComponent');
    },
    removeStepComponent(context) {
      context.commit('removeStepComponent');
    },
    clearSelectedSteps(context) {
      context.commit('clearSelectedSteps');
    },
    setMultipleMakersMultipleWorks(context, result) {
      context.commit('isMultipleMakersMultipleWorks', result);
    },
    setNameMultipleMakersMultipleWorks(context, result) {
      if (result) {
        context.commit('setNameMultipleMakersMultipleWorks', result);
      }
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
