<template>
  <div id="q-app">
    <router-view />
    <TheGlobalModal />
  </div>
</template>

<script>
import settingsJSON from "./app-files/settings.json";
import TheGlobalModal from "./components/the-global-modal";
export default {
  name: "App",
  components: {
    TheGlobalModal
  },
  created() {
    if (!this.$q.localStorage.getItem("settings"))
      this.$q.localStorage.set("settings", settingsJSON);
  }
};
</script>
