<template>
  <q-layout view="lHh Lpr lFf" :id="getAppId">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-btn icon="fas fa-bars" @click="displayDrawer = !displayDrawer" flat round/>

        <q-toolbar-title></q-toolbar-title>

        <q-btn 
          v-if="onHomeRoute" 
          flat
          round
          @click="runFiddle"
        >
          <q-icon name="fas fa-chevron-right" />
        </q-btn>
        <q-btn 
          v-else-if="onSettingsRoute" 
          flat
          round
          @click="updateSettings"
        >
          <q-icon name="fas fa-save" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="displayDrawer"
        :width="200"
        elevated
        content-class="drawer"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item @click="$router.push('/')" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-hammer" />
              </q-item-section>

              <q-item-section>
                Build
              </q-item-section>
            </q-item>
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
import { settingsGetters, settingsActions } from '../store/helpers'
export default {
  name: "MainLayout",
  data() {
    return {
      displayDrawer: false
    }
  },
  computed: {
    ...settingsGetters,
    onHomeRoute() {
      return this.$route.path === '/'
    },
    onSettingsRoute() {
      return this.$route.path === '/settings'
    },
    getAppId() {
      return this.isDarkMode 
        ? 'app-dark' 
        : 'app-light'
    }
  },
  methods: {
    runFiddle() {
      this.$root.$emit('run-fiddle');
    },
    updateSettings() {
      this.$root.$emit('update-settings')
    }
  }
};
</script>

<style lang="scss">
@import '../css/app.scss';

.toolbar {
  transition: all 0.5s;
  background-color: $toolbar-color;
  color: $text-color;
}

.drawer {
  background-color: $sidebar-color;
  color: $text-color;
}
</style>