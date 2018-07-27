<template>
  <q-layout view="lhh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-toolbar-title>
          Fiddle Native
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>

        <q-btn
          flat
          round
          @click="runFiddle"
        >
          <q-icon name="fas fa-chevron-right"/>
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { remote } from 'electron'
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    runFiddle () {
      remote
        .getCurrentWindow()
        .webContents
        .send('run-fiddle')
    }
  }
}
</script>

<style>
</style>
