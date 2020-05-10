import { mapState, mapGetters, mapActions } from "vuex";

export const fiddleGetters = {
  ...mapState({
    fiddle: state => state.fiddle.fiddle,
    selectedBoilerplateOption: state => state.fiddle.selectedBoilerplateOption
  })
};

export const fiddleActions = mapActions([
  "initFiddle",
  "resetFiddle",
  "updateFiddle",
  "updateSelectedBoilerplateOption"
]);

export const settingsGetters = {
  ...mapState({
    settings: state => state.settings.settings
  }),
  ...mapGetters(["isDarkMode"])
};

export const settingsActions = mapActions(["updateSettings"]);

export const interfaceGetters = {
  ...mapState({
    displayFiddleSettingsModal: state =>
      state.interface.displayFiddleSettingsModal
  })
};

export const interfaceActions = mapActions([
  "updateDisplayFiddleSettingsModal"
]);
