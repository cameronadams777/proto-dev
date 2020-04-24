<template>
  <div class="console">
    <span v-for="output in fiddle.consoleOutput" :key="output" class="console__output">
      {{ output | stringify }}
    </span>
  </div>
</template>

<script>
import { fiddleGetters } from "../store/helpers";
export default {
  computed: {
    ...fiddleGetters
  },
  filters: {
    stringify(value) {
      if(typeof value === 'object') return JSON.stringify(value)
      return value
    }
  }
};
</script>

<style lang="scss">
@import "../css/app.scss";

.console {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid $editor-border-color;

  &__output {
    width: 100%;
    padding: 0.5rem;
    border-bottom: 1px solid $sidebar-color;
  }
}
</style>
