<template>
  <q-dialog>
    <span slot="title">Preferences</span>

    <div slot="body">
      <q-select
        :value="selectedTheme"
        float-label="Select A Theme"
        @change="updateSelectedTheme($event)"
      />
    </div>

    <template
      slot="buttons"
      slot-scope="props"
    >
      <q-btn
        label="Choose Spiderman"
        @click="updatePreferencesModalShown(false)"
      />
    </template>
  </q-dialog>
</template>

<script>
import { interfaceGetters, interfaceActions } from '../store/helpers'
export default {
  computed: {
    ...interfaceGetters
  },
  methods: {
    ...interfaceActions
  }
}
</script>
