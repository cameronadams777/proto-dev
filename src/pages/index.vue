<template>
  <q-page class="flex column">
    <div class="flex col">
      <ViewPane 
        class="col" 
        language="text/html"
      />
      <ViewPane class="col" />
    </div>
    <div class="flex col">
      <ViewPane 
        class="col"
        language="text/javascript"
      />
      <ViewPane
        class="col"
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
