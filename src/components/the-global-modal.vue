
<template>
  <div>
    <PreferencesModal v-if="preferencesModalShown"/>
  </div>
</template>

<script>
import { interfaceGetters } from '../store/helpers'
import PreferencesModal from './preferences-modal'
export default {
  components: {
    PreferencesModal
  },
  computed: {
    ...interfaceGetters
  }
}
</script>
