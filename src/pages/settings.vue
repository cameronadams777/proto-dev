<template>
  <Editor
    class="editor"
    language="text/javascript"
    :defaultCode="settingsCode"
    @input="updateSettingsCode($event)"
  />
</template>

<script>
import { settingsGetters, settingsActions } from '../store/helpers'
import Editor from '../components/editor'
export default {
  components: {
    Editor
  },
  data () {
    return {
      settingsCode: ''
    }
  },
  created() {
    this.settingsCode = JSON.stringify(this.settings, null, this.settings.tabSize)
    this.$root.$on('update-settings', () => this.updateSettings(this.settingsCode))
  },
  computed: {
    ...settingsGetters
  },
  methods: {
    ...settingsActions,
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