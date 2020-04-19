<template>
  <div class="view-pane">
    <div class="view-container">
      <Editor
        v-if="language"
        :language="language"
        :defaultCode="code"
        @input="$emit('input', $event)"
      />
      <ResultContainer v-else/>
    </div>
  </div>
</template>

<script>
import Editor from '../components/editor'
import ResultContainer from './result-container'
export default {
  components: {
    Editor,
    ResultContainer
  },
  props: {
    language: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  },
  computed: {
    formattedCurrentType () {
      return this.currentType.toUpperCase()
    }
  }
}
</script>

<style>
.view-pane {
  position: relative;
}

.view-container {
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
