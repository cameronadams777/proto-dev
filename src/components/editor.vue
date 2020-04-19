<template>
  <div class="editor-container">
    <codemirror
      :value="code"
      :options="cmOptions"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
import { fiddleGetters, fiddleActions } from '../store/helpers'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ayu-dark.css'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlembedded/htmlembedded.js'
export default {
  components: {
    codemirror
  },
  props: {
    language: {
      type: String,
      required: true
    },
    defaultCode: {
      type: String,
      default: ''
    }
  },
  data () {
    const settings = this.$q.localStorage.getItem('settings')
    return {
      cmOptions: {
        tabSize: settings.tabSize,
        mode: this.language,
        theme: (this.$q.dark.isActive || settings.theme === 'dark') 
          ? 'ayu-dark' 
          : 'default',
        lineNumbers: settings.lineNumbers,
        line: settings.line
      },
      code: this.defaultCode
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

<style lang='scss'>
@import '../css/app.scss';

.editor-container {
  position: relative;
  border: 1px solid $editor-border-color;
  height: 100%;
}

.vue-codemirror {
  height: 100%;
}

.CodeMirror {
  height: 100%;
}
</style>
