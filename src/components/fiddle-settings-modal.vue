<template>
  <q-dialog
    :value="displayFiddleSettingsModal"
    @input="toggleModal"
    @hide="closeModal"
  >
    <q-card class="fiddle-settings-modal">
      <q-btn
        icon="fas fa-times"
        class="fiddle-settings-modal__close-button"
        flat
        @click="closeModal"
      />
      <div class="q-pa-md">
        <div class="q-gutter-y-md">
          <section>
            <span class="fiddle-settings-modal__section-title"
              >Boilerplate</span
            >
            <q-btn-toggle
              spread
              no-caps
              toggle-color="purple"
              color="white"
              text-color="black"
              :options="boilerplateOptions"
              :value="selectedBoilerplateOption"
              @input="selectBoilerplate"
            />
          </section>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { boilerplateOptions } from "../constants";
import {
  fiddleGetters,
  fiddleActions,
  interfaceGetters,
  interfaceActions
} from "../store/helpers";
export default {
  name: "FiddleSettingsModal",
  data() {
    return {
      boilerplateOptions
    };
  },
  computed: {
    ...interfaceGetters,
    ...fiddleGetters
  },
  methods: {
    ...interfaceActions,
    ...fiddleActions,
    toggleModal(e) {
      this.updateDisplayFiddleSettingsModal(!this.displayFiddleSettingsModal);
    },
    closeModal() {
      this.updateDisplayFiddleSettingsModal(false);
    },
    selectBoilerplate(e) {
      this.updateSelectedBoilerplateOption(e);
    }
  }
};
</script>

<style lang="scss">
.fiddle-settings-modal {
  width: 50vw;
  height: 50vh;
  padding: 1rem;

  &__close-button {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  &__section-title {
    font-weight: 900;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
