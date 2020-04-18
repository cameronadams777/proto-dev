<template>
  <div class="editor-container">
    <codemirror
      :value="fiddle.cssCode"
      :options="cmOptions"
      @input="updateFiddle({ cssCode: $event })"
    />
  </div>
</template>

<script>
import { fiddleGetters, fiddleActions } from '../store/helpers'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css.js'
export default {
  components: {
    codemirror
  },
  data () {
    return {
      settings: {},
      cmOptions: {}
    }
  },
  mounted() {
    this.settings = this.$q.localStorage.getItem('settings')
    this.cmOptions = {
      tabSize: this.settings.tabSize,
      mode: 'text/css',
      lineNumbers: this.settings.lineNumbers,
      line: this.settings.line
    }
    console.log(this.cmOptions)
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
