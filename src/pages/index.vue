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

<script>
import ViewPane from "../components/view-pane";
export default {
  name: "PageIndex",
  components: {
    ViewPane
  },
  mounted() {
    this.$ua.trackView('Editor')
  }
};
</script>
