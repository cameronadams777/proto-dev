import { mapState, mapGetters, mapActions } from "vuex";

export const fiddleGetters = {
  ...mapState({
    fiddle: state => state.fiddle.fiddle
  })
};

export const fiddleActions = mapActions([
  "initFiddle",
  "resetFiddle",
  "updateFiddle"
]);

export const settingsGetters = {
  ...mapState({
    settings: state => state.settings.settings
  }),
  ...mapGetters([
    'isDarkMode'
  ])
}

export const settingsActions = mapActions([
  "updateSettings",
]);