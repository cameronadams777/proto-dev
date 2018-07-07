<template>
  <div class="editor-container">
    <codemirror
      class="editor"
      :value="fiddle.javascriptCode"
      :options="cmOptions"
      @input="updateFiddle({ javascriptCode: $event})"
    />
    <span class="language-label">JS</span>
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
    return {
      cmOptions: {
        tabSize: 2,
        mode: 'text/javascript',
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
}

.CodeMirror {
  height: 100%;
}

.language-label {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 50px;
  margin: 5px;
  padding: 5px;
  color: grey;
  text-align: center;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
}
</style>
