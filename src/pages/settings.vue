<template>
  <Editor
    class="editor"
    language="text/javascript"
    :defaultCode="settingsCode"
    @input="updateSettingsCode($event)"
  />
</template>

<script>
import settingsJSON from '../app-files/settings.json'
import Editor from '../components/editor'
export default {
  components: {
    Editor
  },
  data () {
    return {
      settingsCode: JSON.stringify(this.$q.localStorage.getItem('settings'), null, this.$q.localStorage.getItem('settings').tabSize)
    }
  },
  beforeDestroy() {
    const updatedSettings = JSON.parse(this.settingsCode)
    this.$q.localStorage.set('settings', updatedSettings)
  },
  methods: {
    updateSettingsCode(event) {
      this.settingsCode = event
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  height: 100vh;
}
</style>