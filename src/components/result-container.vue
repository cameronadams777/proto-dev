<template>
  <div ref="container" class="results-container" />
</template>

<script>
import uniqueId from "lodash/uniqueId";
import { constructHTML } from "../helpers/result-helpers";
import { fiddleGetters, fiddleActions } from "../store/helpers";
export default {
  computed: {
    ...fiddleGetters
  },
  mounted() {
    this.updateView();
  },
  created() {
    this.$root.$on("run-fiddle", () => this.updateView());
  },
  methods: {
    ...fiddleActions,
    updateView() {
      let doc;
      let container = this.$refs.container;
      let iframeId = uniqueId("iframe_");

      container.innerHTML = `<iframe id="${iframeId}" class="results" />`;

      const iframe = document.getElementById(iframeId);

      const consoleOutput = []

      iframe.contentWindow.console.log = (...args) => {
        consoleOutput.push(...args);
      }

      const results = constructHTML(this.fiddle);

      if (iframe.contentDocument) doc = iframe.contentDocument;
      else if (iframe.contentWindow) doc = iframe.contentWindow.document;
      else doc = iframe.document;

      doc.open();
      doc.writeln(results);
      doc.close();
      this.updateFiddle({ consoleOutput })
    }
  }
};
</script>

<style lang="scss">
@import '../css/app.scss';

.results-container {
  height: 100%;
}

.results {
  width: 100%;
  height: 100%;
  border: 1px solid $results-container-border-color;
  background-color: $results-container-background-color;
}
</style>
