<template>
  <div class="view-pane">
    <div class="view-container">
      <HTMLEditor v-if="currentType === 'html'"/>
      <JavaScriptEditor v-if="currentType === 'js'"/>
      <CSSEditor v-if="currentType === 'css'"/>
      <ResultContainer v-if="currentType === 'output'"/>
    </div>
    <q-select
      v-model="currentType"
      class="language-label"
     :options="types"
    />
  </div>
</template>

<script>
import HTMLEditor from './html-editor'
import JavaScriptEditor from './javascript-editor'
import CSSEditor from './css-editor'
import ResultContainer from './result-container'
export default {
  components: {
    HTMLEditor,
    JavaScriptEditor,
    CSSEditor,
    ResultContainer
  },
  props: {
    initialType: {
      type: String,
      default: 'html'
    }
  },
  data () {
    return {
      types: [
        {
          label: 'HTML',
          value: 'html'
        },
        {
          label: 'JavaScript',
          value: 'js'
        },
        {
          label: 'CSS',
          value: 'css'
        },
        {
          label: 'Output',
          value: 'output'
        }
      ],
      currentType: this.initialType
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
