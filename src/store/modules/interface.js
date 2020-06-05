export default {
  state: {
    displayFiddleSettingsModal: false
  },
  mutations: {
    UPDATE_DISPLAY_FIDDLE_SETTINGS_MODAL(state, newValue) {
      state.displayFiddleSettingsModal = newValue;
    }
  },
  actions: {
    updateDisplayFiddleSettingsModal({ commit }, newValue) {
      commit("UPDATE_DISPLAY_FIDDLE_SETTINGS_MODAL", newValue);
    }
  }
};