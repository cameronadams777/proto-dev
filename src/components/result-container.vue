<template>
  <div>
    <iframe
      ref="iframe"
      style="width: 100%; height: 100%; border-style: solid; border-width: 1px; border-color: #b4b4b4;"
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
