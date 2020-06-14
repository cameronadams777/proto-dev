export default {
  state: {
    displayFiddleSettingsModal: false,
    displayDeleteProfileConfirmationModal: false
  },
  mutations: {
    UPDATE_DISPLAY_FIDDLE_SETTINGS_MODAL(state, newValue) {
      state.displayFiddleSettingsModal = newValue;
    },
    UPDATE_DISPLAY_DELETE_PROFILE_CONFIRMATION_MODAL(state, newValue) {
      state.displayDeleteProfileConfirmationModal = newValue;
    }
  },
  actions: {
    updateDisplayFiddleSettingsModal({ commit }, newValue) {
      commit("UPDATE_DISPLAY_FIDDLE_SETTINGS_MODAL", newValue);
    },
    updateDisplayDeleteProfileConfirmationModal({ commit }, newValue) {
      commit("UPDATE_DISPLAY_DELETE_PROFILE_CONFIRMATION_MODAL", newValue);
    }
  }
};