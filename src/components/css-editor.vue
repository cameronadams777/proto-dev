<template>
  <div class="editor-container">
    <codemirror
      class="editor"
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
      cmOptions: {
        tabSize: 2,
        mode: 'text/css',
        lineNumbers: true,
        line: true
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

.editor {
  height: 100%;
}
</style>
