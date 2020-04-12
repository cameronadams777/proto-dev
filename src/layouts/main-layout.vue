<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Fiddle Native
        </q-toolbar-title>

        <q-btn flat round @click="runFiddle">
          <q-icon name="fas fa-chevron-right" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// Import the EventBus we just created.
import { EventBus } from "../helpers/event-bus.js";
export default {
  name: "MainLayout",
  methods: {
    runFiddle() {
      EventBus.$emit("run-fiddle");
    }
  }
};
</script>
