<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn icon="fas fa-bars" @click="displayDrawer = !displayDrawer" flat round/>

        <q-toolbar-title>
          Fiddle Native
        </q-toolbar-title>

        <q-btn flat round @click="runFiddle">
          <q-icon name="fas fa-chevron-right" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="displayDrawer"
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item @click="$router.push('/settings')" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-cog" />
              </q-item-section>

              <q-item-section>
                Settings
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

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
  data() {
    return {
      displayDrawer: false
    }
  },
  methods: {
    runFiddle() {
      EventBus.$emit("run-fiddle");
    }
  }
};
</script>
