<template>
  <div class="editor-container">
    <codemirror
      class="editor"
      :value="fiddle.htmlCode"
      :options="cmOptions"
      @input="updateFiddle({ htmlCode: $event })"
    />
  </div>
</template>

<script>
import { fiddleGetters, fiddleActions } from '../store/helpers'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/htmlembedded/htmlembedded.js'
export default {
  components: {
    codemirror
  },
  data () {
    return {
      cmOptions: {
        tabSize: 2,
        mode: 'text/html',
        lineNumbers: true,
        line: true
      },
      labelText: 'HTML'
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
