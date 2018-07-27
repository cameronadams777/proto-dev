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
}

.editor {
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
