<template>
  <q-page
    class="forgot-password-page flex flex-center"
    @keydown.enter="sendPasswordResetEmail"
  >
    <q-card class="forgot-password-page__form-card">
      <div class="forgot-password-page__form-logo-container">
        <Logo />
      </div>
      <span class="forgot-password-page__form-title">Proto Dev</span>
      <q-input
        v-model="passwordResetForm.email"
        label="Email"
        type="email"
        class="forgot-password-page__form-input"
        filled
        @focus="$v.passwordResetForm.email.$reset()"
        @input="$v.passwordResetForm.email.$touch()"
      />
      <div
        v-if="$v.passwordResetForm.email.$error"
        class="forgot-password-page__error-container"
      >
        <span
          v-if="!$v.passwordResetForm.email.required"
          class="forgot-password-page__error"
          >Email is required</span
        >
        <span
          v-if="!$v.passwordResetForm.email.email"
          class="forgot-password-page__error"
          >Please enter a valid email</span
        >
      </div>
      <div class="flex">
        <q-btn
          color="black"
          label="Reset Password"
          @click="sendPasswordResetEmail"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import Logo from "../components/logo";
import { required, email } from "vuelidate/lib/validators";
import { userActions } from "../store/helpers";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "ForgotPasswordPage",
  components: {
    Logo
  },
  data() {
    return {
      passwordResetForm: {
        email: ""
      }
    };
  },
  validations: {
    passwordResetForm: {
      email: {
        required,
        email
      }
    }
  },

  methods: {
    ...userActions,
    async sendPasswordResetEmail() {
      try {
        this.$v.passwordResetForm.$touch();
        if (this.$v.passwordResetForm.$error) {
          this.error = "An error occurred. Please try again.";
          return;
        }

        await firebase
          .auth()
          .sendPasswordResetEmail(this.passwordResetForm.email);
        this.$q.notify({
          message: "An email is on it's way!",
          color: "positive"
        });
        this.$gtag.event("password reset email sent", { method: "Google" });
        this.$router.push("/login");
      } catch (error) {
        this.$q.notify({ color: "negative", message: error.message });
      }
    }
  }
};
</script>

<style lang="scss">
.forgot-password-page {
  &__form-card {
    padding: 2rem;
    width: 25%;

    @media only screen and (max-width: 1023px) {
      width: 75%;
    }
  }

  &__form-logo-container {
    width: 175px !important;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  &__form-title {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  &__form-input {
    margin-bottom: 1rem;
  }

  &__error-container {
    margin: 0.5rem 0;
  }

  &__error {
    color: red;
  }
}
</style>
