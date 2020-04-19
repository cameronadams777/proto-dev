<template>
  <q-page class="flex column">
    <div class="flex col">
      <ViewPane 
        class="col" 
        language="text/html" 
        :code="fiddle.htmlCode" 
        @input="updateFiddle({ htmlCode: $event })"
      />
      <ViewPane class="col" />
    </div>
    <div class="flex col">
      <ViewPane 
        class="col"
        language="text/javascript"
        :code="fiddle.javascriptCode"
        @input="updateFiddle({ javascriptCode: $event })"
      />
      <ViewPane
        class="col"
        language="text/css"
        :code="fiddle.cssCode"
        @input="updateFiddle({ cssCode: $event })"
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
