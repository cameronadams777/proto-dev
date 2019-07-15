<template>
  <q-page class="flex column">
    <div class="flex col">
      <ViewPane
        class="col"
        initial-type="html"
      />
      <ViewPane
        class="col"
        initial-type="output"
      />
    </div>
    <div class="flex col">
      <ViewPane
        class="col"
        initial-type="js"
      />
      <ViewPane
        class="col"
        initial-type="css"
      />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import ViewPane from '../components/view-pane'
export default {
  name: 'PageIndex',
  components: {
    ViewPane
  }
}
</script>
