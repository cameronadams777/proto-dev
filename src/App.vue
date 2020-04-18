<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import settingsJSON from './app-files/settings.json'
export default {
  name: 'App',
  created() {
    if(!this.$q.localStorage.getItem('settings')) 
      this.$q.localStorage.set('settings', settingsJSON)
  }
}
</script>
