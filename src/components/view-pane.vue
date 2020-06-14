<template>
  <div class="view-pane">
    <div class="view-container">
      <Editor
        v-if="currentView.view === 'editor'"
        :language="currentView.language"
        :defaultCode="currentView.code"
        @input="currentView.update"
      />
      <Console v-else-if="currentView.view === 'console'" />
      <ResultContainer v-else-if="currentView.view === 'output'" />
    </div>
    <q-btn
      v-if="currentView.view !== 'output'"
      class="language-label"
      color="primary"
      :label="currentView.label"
    >
      <q-menu anchor="bottom left" self="top left">
        <q-item
          v-for="viewOption in viewOptions"
          :key="viewOption.label"
          clickable
          v-close-popup
          @click="selectView(viewOption)"
        >
          <q-item-section>{{ viewOption.label }}</q-item-section>
        </q-item>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import Editor from "../components/editor";
import Console from "../components/console";
import ResultContainer from "./result-container";
import { fiddleGetters, fiddleActions } from "../store/helpers";
export default {
  components: {
    Editor,
    Console,
    ResultContainer
  },
  props: {
    language: {
      type: String,
      default: ""
    },
    code: {
      type: String,
      default: ""
    },
    view: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentView: {
        label: "",
        view: "",
        language: "",
        code: "",
        update: () => {}
      },
      viewOptions: []
    };
  },
  created() {
    this.initializeNewFiddle()
    this.$root.$on("reset-editor", () => this.initializeNewFiddle());
  },
  computed: {
    ...fiddleGetters
  },
  methods: {
    ...fiddleActions,
    selectView(view) {
      this.currentView = view;
    },
    initializeNewFiddle() {
      this.viewOptions = [
        {
          label: "HTML",
          view: "editor",
          language: "text/html",
          code: this.fiddle.htmlCode,
          update: e => this.updateFiddle({ htmlCode: e })
        },
        {
          label: "CSS",
          view: "editor",
          language: "text/css",
          code: this.fiddle.cssCode,
          update: e => this.updateFiddle({ cssCode: e })
        },
        {
          label: "Javascript",
          view: "editor",
          language: "text/javascript",
          code: this.fiddle.javascriptCode,
          update: e => this.updateFiddle({ javascriptCode: e })
        },
        {
          label: "Output",
          view: "output",
          language: "",
          code: "",
          update: () => {}
        },
        {
          label: "Console",
          view: "console",
          language: "",
          code: "",
          update: () => {}
        }
      ];

      this.currentView = this.viewOptions.find(
        viewOption =>
          (viewOption.view === "editor" &&
            viewOption.language === this.language) ||
          (viewOption.view !== "editor" && viewOption.view === this.view)
      );
    }
  }
};
</script>

<style lang="scss">
@import "../css/app.scss";

.view-pane {
  position: relative;
}

.view-container {
  height: 100%;
}

.language-label {
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 10;
}
</style>
