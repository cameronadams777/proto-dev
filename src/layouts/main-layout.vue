<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn icon="fas fa-bars" @click="displayDrawer = !displayDrawer" flat round/>

        <q-toolbar-title>
          Fiddle Native
        </q-toolbar-title>

        <q-btn v-if="onHomeRoute" flat round @click="runFiddle">
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
export default {
  name: "MainLayout",
  data() {
    return {
      displayDrawer: false
    }
  },
  computed: {
    onHomeRoute() {
      return this.$route.path === '/'
    }
  },
  methods: {
    runFiddle() {
      this.$root.$emit("run-fiddle");
    }
  }
};
</script>
