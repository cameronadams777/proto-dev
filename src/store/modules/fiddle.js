import fs from "fs";

// Default fiddle values to demostrate what each box in the UI is for. It is
// stored here so that we can reset it when we need to.
const defaultFiddle = {
  htmlCode: "<p>Hello World</p>",
  cssCode: "p { color: blue; }",
  javascriptCode: `// Check the console \n console.log('This is a test!')`
};

export default {
  state: {
    fiddle: defaultFiddle
  },
  mutations: {
    SET_FIDDLE(state, newValue) {
      state.fiddle = newValue;
    }
  },
  actions: {
    initFiddle({ dispatch }) {
      // When starting up the app, initialize the editors
      // to have the default fiddle values.
      dispatch("resetFiddle");
    },
    updateFiddle({ state, commit }, codeChanges) {
      const updatedFiddle = {
        ...state.fiddle,
        ...codeChanges
      };

      commit("SET_FIDDLE", updatedFiddle);
    },
    resetFiddle({ commit }) {
      // Reset current fiddle to the default
      commit("SET_FIDDLE", defaultFiddle);
    }
  }
};
