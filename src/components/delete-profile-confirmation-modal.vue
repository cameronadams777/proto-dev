<template>
  <q-dialog
    :value="displayDeleteProfileConfirmationModal"
    @input="toggleModal"
    @hide="closeModal"
  >
    <q-card class="delete-profile-confirmation-modal">
      <q-btn
        icon="fas fa-times"
        class="fiddle-settings-modal__close-button"
        flat
        @click="closeModal"
      />
      <div class="delete-profile-confirmation-modal__content-container">
        <span class="delete-profile-confirmation-modal__alert-message"
          >Please enter your password to confirm you wish to delete your
          account</span
        >
        <q-input
          v-model="confirmationModalForm.password"
          label="Password"
          type="password"
          class="delete-profile-confirmation-modal__form-input"
          filled
          @focus="$v.confirmationModalForm.password.$reset()"
          @input="$v.confirmationModalForm.password.$touch()"
        />
        <div
          v-if="$v.confirmationModalForm.password.$error"
          class="delete-profile-confirmation-modal__error-container"
        >
          <span class="delete-profile-confirmation-modal__error"
            >Password is required</span
          >
        </div>
        <div class="delete-profile-confirmation-modal__cta-container">
          <q-btn
            color="negative"
            class="delete-profile-confirmation-modal__delete-button"
            @click="deleteAccountAndSendToHome"
          >
            Delete
          </q-btn>
          <q-btn 
            color="primary"
            class="delete-profile-confirmation-modal__cancel-button"
            @click="closeModal"
          >
            Cancel
          </q-btn>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import {
  interfaceGetters,
  interfaceActions,
  userActions
} from "../store/helpers";
export default {
  name: "DeleteProfileConfirmationModal",
  data() {
    return {
      confirmationModalForm: {
        password: ""
      }
    };
  },
  validations: {
    confirmationModalForm: {
      password: {
        required
      }
    }
  },
  computed: {
    ...interfaceGetters
  },
  methods: {
    ...interfaceActions,
    ...userActions,
    toggleModal(e) {
      this.updateDisplayDeleteProfileConfirmationModal(
        !this.displayDeleteProfileConfirmationModal
      );
    },
    closeModal() {
      this.updateDisplayDeleteProfileConfirmationModal(false);
    },
    async deleteAccountAndSendToHome() {
      const payload = {
        password: this.confirmationModalForm.password
      };
      await this.deleteUserAccount(payload);
      this.updateDisplayDeleteProfileConfirmationModal(false);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.delete-profile-confirmation-modal {
  width: 50vw;
  height: 50vh;
  padding: 1rem;

  @media (orientation: landscape) and (max-width: 1023px) {
    width: 100vw;
    height: 100vh;
  }

  &__close-button {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  &__content-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__form-input {
    margin-bottom: 1rem;
    width: 75%;
  }

  &__error-container {
    margin: 0.5rem 0;
  }

  &__error {
    color: red;
  }

  &__alert-message {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }

  &__cta-container {
    display: flex;
    align-items: center;
  }

  &__delete-button {
    margin-right: 0.5rem;
  }

  &__cancel-button {
    margin-left: 0.5rem;
  }
}
</style>
