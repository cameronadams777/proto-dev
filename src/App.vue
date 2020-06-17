<template>
  <div id="q-app">
    <router-view />
    <TheGlobalModal />
  </div>
</template>

<script>
import settingsJSON from "./app-files/settings.json";
import firebase from "firebase/app";
import { firestore } from './boot/firebase';
import { userActions } from "./store/helpers";
import TheGlobalModal from "./components/the-global-modal";
export default {
  name: "App",
  components: {
    TheGlobalModal
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(async user => {
      const userData = await this.getUserData(user);
      console.log(userData)
      this.setUser(userData || false);
      if (user && (this.$route.path === "/login" || this.$route.path === '/register')) {
        this.$router.replace("/");
      }
    });
  },
  created() {
    if (!this.$q.localStorage.getItem("settings"))
      this.$q.localStorage.set("settings", settingsJSON);
  },
  methods: {
    ...userActions
  }
};
</script>
