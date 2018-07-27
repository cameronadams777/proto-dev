<template>
  <div class="results-container">
    <iframe
      id="iframe"
      class="results"
    />
  </div>
</template>

<script>
import { ipcRenderer as ipc } from 'electron'
import { fiddleGetters } from '../store/helpers'
export default {
  computed: {
    ...fiddleGetters
  },
  mounted () {
    this.updateView()
  },
  created () {
    ipc.on('run-fiddle', this.updateView)
  },
  methods: {
    updateView () {
      let doc
      const iframe = document.getElementById('iframe')
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
.results-container {
  height: 100%;
}

.results {
  width: 100%;
  height: 100%;
  border: 1px solid #beb1b1;
}
</style>
