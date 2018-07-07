<template>
  <div>
    <iframe
      ref="iframe"
      style="width: 100%; height: 100%; border-style: solid; border-width: 1px; border-color: #b4b4b4;"
    />
    <button
      class="run-button"
      @click="updateView"
    >
      Run
    </button>
  </div>
</template>

<script>
import { fiddleGetters } from '../store/helpers'
export default {
  computed: {
    ...fiddleGetters
  },
  mounted () {
    this.updateView()
  },
  methods: {
    updateView () {
      let doc
      const iframe = this.$refs.iframe
      // eslint-disable-next-line
      const results = '<html><head><style>' + this.fiddle.cssCode + '</style></head><body>' + this.fiddle.htmlCode + '<script type="text/javascript">' + this.fiddle.javascriptCode + '<\/script></body></html>'

      if (iframe.contentDocument) doc = iframe.contentDocument
      else if (iframe.contentWindow) doc = iframe.contentWindow.document
      else doc = iframe.document

      doc.open()
      doc.writeln(results)
      doc.close()
    }
  }
}
</script>

<style>
.run-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
  width: 100px;
  height: 50px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  background-color: white;
}
</style>
