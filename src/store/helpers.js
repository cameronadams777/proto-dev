import { mapState, mapActions } from "vuex";

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
