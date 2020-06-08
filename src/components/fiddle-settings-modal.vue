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
          <section>
            <span class="fiddle-settings-modal__section-title">
              External Resources
            </span>
            <div>
              <q-chip
                v-for="(link, index) in fiddle.links"
                :key="index"
                color="primary"
                text-color="white"
                removable
                @remove="removeResource(link)"
              >
                {{ link | linkName }}
              </q-chip>
            </div>
            <q-input
              v-model="resourceToAdd"
              label="Resources/CDN"
              filled
              bottom-slots
              @keydown.enter="appendResource"
            >
              <template v-slot:append>
                <q-btn round dense flat icon="add" @click="appendResource" />
              </template>
            </q-input>
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
      boilerplateOptions,
      resourceToAdd: ""
    };
  },
  filters: {
    linkName(link) {
      return link.substring(link.lastIndexOf("/") + 1, link.length);
    }
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
    },
    appendResource() {
      this.$gtag.event("added new resource", { method: "Google" });
      if (
        this.resourceToAdd !== "" &&
        !this.fiddle.links.includes(this.resourceToAdd)
      ) {
        this.updateFiddle({
          links: [...this.fiddle.links, this.resourceToAdd]
        });
        this.resourceToAdd = "";
      }
    },
    removeResource(removedLink) {
      this.$gtag.event("removed resource", { method: "Google" });
      const newLinks = this.fiddle.links.filter(link => link !== removedLink);
      this.updateFiddle({ links: newLinks });
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
