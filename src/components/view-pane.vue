<template>
  <div class="view-pane">
    <div class="view-container">
      <Editor
        v-if="language"
        :language="currentLanguage.language"
        :defaultCode="currentLanguage.code"
        @input="currentLanguage.update"
      />
      <ResultContainer v-else />
    </div>
    <q-btn 
      v-if="currentLanguage" 
      class="language-label" 
      color="primary"
      :label="currentLanguage.label"
    >
      <q-menu anchor="bottom left" self="top left">
        <q-item
          v-for="language in languageOptions"
          :key="language.label"
          clickable
          @click="selectLanguage(language)"
        >
          <q-item-section>{{ language.label }}</q-item-section>
        </q-item>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import Editor from "../components/editor";
import ResultContainer from "./result-container";
import { fiddleGetters, fiddleActions } from "../store/helpers";
export default {
  components: {
    Editor,
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
    }
  },
  data() {
    return {
      currentLanguage: {},
      languageOptions: []
    };
  },
  created() {
    this.languageOptions = [
      {
        label: "HTML",
        language: "text/html",
        code: this.fiddle.htmlCode,
        update: e => this.updateFiddle({ htmlCode: e })
      },
      {
        label: "CSS",
        language: "text/css",
        code: this.fiddle.cssCode,
        update: e => this.updateFiddle({ cssCode: e })
      },
      {
        label: "Javascript",
        language: "text/javascript",
        code: this.fiddle.javascriptCode,
        update: e => this.updateFiddle({ javascriptCode: e })
      }
    ];

    this.currentLanguage = this.languageOptions.find(
      languageOption => languageOption.language === this.language
    );
  },
  computed: {
    ...fiddleGetters
  },
  methods: {
    ...fiddleActions,
    selectLanguage(language) {
      this.currentLanguage = language;
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
  z-index: 9999999;
}
</style>
