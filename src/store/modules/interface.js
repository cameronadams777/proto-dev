export default {
  state: {
    themes: ['Light', 'Dark'],
    selectedTheme: 'Dark',
    settingsModalShown: false
  },
  mutations: {
    SET_SELECTED_THEME (state, newValue) {
      state.selectedTheme = newValue
    },
    UPDATE_PREFERENCES_MODAL_SHOWN (state, newValue) {
      state.shouldDisplaySettingsModal = newValue
    }
  },
  actions: {
    updateSelectedTheme ({ commit }, selectedTheme) {
      commit('SET_SELECTED_THEME', selectedTheme)
    },
    updatePreferencesModalShown ({ commit }, newValue) {
      commit('UPDATE_PREFERENCES_MODAL_SHOWN', newValue)
    }
  }
}
