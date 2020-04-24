<template>
  <q-page class="flex column">
    <div class="flex col">
      <ViewPane 
        class="col"
        view="editor"
        language="text/html"
      />
      <ViewPane class="col" view="output" />
    </div>
    <div class="flex col">
      <ViewPane 
        class="col"
        view="editor"
        language="text/javascript"
      />
      <ViewPane
        class="col"
        view="editor"
        language="text/css"
       />
    </div>
  </q-page>
</template>

<style></style>

<script>
import ViewPane from "../components/view-pane";
import { fiddleGetters, fiddleActions } from '../store/helpers'
export default {
  name: "PageIndex",
  components: {
    ViewPane
  },
  computed: {
    ...fiddleGetters
  },
  methods: {
    ...fiddleActions
  }
};
</script>
