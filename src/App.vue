<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { fiddleActions } from './store/helpers'
import { ipcRenderer as ipc } from 'electron'
export default {
  name: 'App',
  created () {
    this.initFiddle()
  },
  mounted () {
    ipc.on('create-new-fiddle', this.resetFiddle)
    ipc.on('open-fiddle', this.openFiddle)
    ipc.on('save-fiddle', this.saveFiddle)
    ipc.on('save-new-fiddle', this.saveNewFiddle)
  },
  beforeDestroy () {
    ipc.on('create-new-fiddle', this.resetFiddle)
    ipc.on('open-fiddle', this.openFiddle)
    ipc.on('save-fiddle', this.saveFiddle)
    ipc.on('save-new-fiddle', this.saveNewFiddle)
  },
  methods: {
    ...fiddleActions
  }
}
</script>
