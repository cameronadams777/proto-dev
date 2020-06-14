<template>
  <div>
    <FiddleSettingsModal />
    <DeleteProfileConfirmationModal />
  </div>
</template>

<script>
import FiddleSettingsModal from "./fiddle-settings-modal";
import DeleteProfileConfirmationModal from "./delete-profile-confirmation-modal";
export default {
  name: "TheGlobalModal",
  components: {
    FiddleSettingsModal,
    DeleteProfileConfirmationModal
  }
};
</script>
