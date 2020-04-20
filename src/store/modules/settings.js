import defaultSettings from '../../app-files/settings'
import { Dark, LocalStorage } from 'quasar'

export default {
  state: {
    settings: LocalStorage.getItem('settings') || defaultSettings 
  },
  mutations: {
    UPDATE_SETTINGS(state, newValue) {
      state.settings = newValue
    }
  },
  getters: {
    isDarkMode (state) {
      return Dark.isActive || state.settings.theme === 'dark'
    }
  },
  actions: {
    updateSettings({ commit }, newValue) {
      const updatedSettings = JSON.parse(newValue)
      LocalStorage.set('settings', updatedSettings)
      commit('UPDATE_SETTINGS', updatedSettings)
    }
  }
}
