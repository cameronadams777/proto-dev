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
import {
  fiddleGetters,
  fiddleActions,
  settingsGetters
} from "../store/helpers";
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/htmlembedded/htmlembedded.js";
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
      default: ""
    }
  },
  data() {
    return {
      cmOptions: {},
      code: this.defaultCode
    };
  },
  created() {
    this.cmOptions = {
      tabSize: this.settings.tabSize,
      mode: this.language,
      theme: this.isDarkMode ? "ayu-dark" : "default",
      lineNumbers: this.settings.lineNumbers,
      line: this.settings.line
    };
  },
  watch: {
    isDarkMode() {
      this.cmOptions = {
        ...this.cmOptions,
        theme: this.isDarkMode ? "ayu-dark" : "default"
      }
    },
    language() {
      this.code = this.defaultCode
      this.cmOptions = {
        ...this.cmOptions,
        mode: this.language,
        theme: this.isDarkMode ? "ayu-dark" : "default"
      }
    }
  },
  computed: {
    ...fiddleGetters,
    ...settingsGetters
  },
  methods: {
    ...fiddleActions
  }
};
</script>

<style lang="scss">
@import "../css/app.scss";

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
