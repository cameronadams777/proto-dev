<template>
  <div ref="container" class="results-container" />
</template>

<script>
import uniqueId from "lodash/uniqueId";
import { EventBus } from "../helpers/event-bus";
import { fiddleGetters } from "../store/helpers";
export default {
  computed: {
    ...fiddleGetters
  },
  mounted() {
    this.updateView();
  },
  created() {
    EventBus.$on("run-fiddle", () => this.updateView());
  },
  methods: {
    updateView() {
      let doc;
      let container = this.$refs.container;
      let iframeId = uniqueId("iframe_");

      container.innerHTML = `<iframe id="${iframeId}" class="results" />`;

      const iframe = document.getElementById(iframeId);

      // eslint-disable-next-line
      const results =
        "<html><head><style>" +
        this.fiddle.cssCode +
        "</style></head><body>" +
        this.fiddle.htmlCode +
        '<script type="text/javascript">' +
        this.fiddle.javascriptCode +
        "<\/script></body></html>";

      if (iframe.contentDocument) doc = iframe.contentDocument;
      else if (iframe.contentWindow) doc = iframe.contentWindow.document;
      else doc = iframe.document;

      doc.open();
      doc.writeln(results);
      doc.close();
    }
  }
};
</script>

<style>
.results-container {
  height: 100%;
}

.results {
  width: 100%;
  height: 100%;
  border: 1px solid #beb1b1;
}
</style>
