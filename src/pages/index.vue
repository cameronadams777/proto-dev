<template>
  <q-page class="flex column">
    <div class="flex col">
      <HTMLEditor class="col"/>
      <ResultContainer class="col"/>
    </div>
    <div class="flex col">
      <JavaScriptEditor class="col"/>
      <CSSEditor class="col"/>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import CSSEditor from '../components/css-editor'
import HTMLEditor from '../components/html-editor'
import JavaScriptEditor from '../components/javascript-editor'
import ResultContainer from '../components/result-container'
export default {
  name: 'PageIndex',
  components: {
    CSSEditor,
    HTMLEditor,
    JavaScriptEditor,
    ResultContainer
  }
}
</script>
