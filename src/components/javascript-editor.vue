<template>
  <div class="editor-container">
    <codemirror
      :value="fiddle.javascriptCode"
      :options="cmOptions"
      @input="updateFiddle({ javascriptCode: $event})"
    />
  </div>
</template>

<script>
import { fiddleGetters, fiddleActions } from '../store/helpers'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
export default {
  components: {
    codemirror
  },
  data () {
    const settings = this.$q.localStorage.getItem('settings')
    return {
      cmOptions: {
        tabSize: settings.tabSize,
        mode: 'text/javascript',
        lineNumbers: settings.lineNumbers,
        line: settings.line
      }
    }
  },
  computed: {
    ...fiddleGetters
  },
  methods: {
    ...fiddleActions
  }
}
</script>

<style>
.editor-container {
  position: relative;
  border: 1px solid #beb1b1;
  height: 100%;
}

.vue-codemirror {
  height: 100%;
}

.CodeMirror {
  height: 100%;
}
</style>
