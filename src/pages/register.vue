<template>
  <q-page
    class="register-page flex flex-center"
    @keydown.enter="attemptToRegisterNewUser"
  >
    <q-card class="register-page__form-card">
      <img src="../assets/logo.png" class="register-page__form-logo" />
      <span class="register-page__form-title">Proto Dev</span>
      <q-input
        v-model="registrationForm.name"
        label="Name"
        class="register-page__form-input"
        filled
      />
      <div
        v-if="$v.registrationForm.name.$error"
        class="register-page__error-container"
      >
        <span
          v-if="!$v.registrationForm.name.required"
          class="register-page__error"
          >Name is required</span
        >
      </div>
      <q-input
        v-model="registrationForm.email"
        label="Email"
        type="email"
        class="register-page__form-input"
        filled
        @focus="$v.registrationForm.email.$reset()"
        @input="$v.registrationForm.email.$touch()"
      />
      <div
        v-if="$v.registrationForm.email.$error"
        class="register-page__error-container"
      >
        <span
          v-if="!$v.registrationForm.email.required"
          class="register-page__error"
          >Email is required</span
        >
        <span
          v-if="!$v.registrationForm.email.email"
          class="register-page__error"
          >Please enter a valid email</span
        >
      </div>
      <q-input
        v-model="registrationForm.password"
        label="Password"
        type="password"
        class="register-page__form-input"
        filled
        @focus="$v.registrationForm.password.$reset()"
        @input="$v.registrationForm.password.$touch()"
      />
      <div
        v-if="$v.registrationForm.password.$error"
        class="register-page__error-container"
      >
        <span
          v-if="!$v.registrationForm.password.required"
          class="register-page__error"
          >Password is required</span
        >
        <span
          v-else-if="!$v.registrationForm.password.minLength"
          class="register-page__error"
          >Password must be at least 8 characters</span
        >
      </div>
      <q-input
        v-model="registrationForm.confirmPassword"
        label="Confirm Password"
        type="password"
        class="register-page__form-input"
        filled
        @focus="$v.registrationForm.confirmPassword.$reset()"
        @input="$v.registrationForm.confirmPassword.$touch()"
      />
      <div
        v-if="$v.registrationForm.confirmPassword.$error"
        class="register-page__error-container"
      >
        <span
          v-if="!$v.registrationForm.confirmPassword.required"
          class="register-page__error"
          >Password confirmation required</span
        >
        <span
          v-else-if="!$v.registrationForm.confirmPassword.sameAsPassword"
          class="register-page__error"
          >Does not match password</span
        >
      </div>

      <div class="flex">
        <q-btn
          color="black"
          label="Register"
          @click="attemptToRegisterNewUser"
        />
        <q-btn label="Login" flat @click="$router.push('/login')" />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { required, sameAs, minLength, email } from "vuelidate/lib/validators";
import { userActions } from "../store/helpers";
export default {
  data() {
    return {
      registrationForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  validations: {
    registrationForm: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    ...userActions,
    async attemptToRegisterNewUser() {
      try {
        this.$v.registrationForm.$touch();
        if (this.$v.registrationForm.$error) {
          this.$q.notify({
            color: "negative",
            message: "An error occurred. Please try again."
          });
          return;
        }
        const payload = {
          name: this.registrationForm.name,
          email: this.registrationForm.email,
          password: this.registrationForm.password
        };
        this.registerNewUser(payload);
        this.$gtag.event("register", { method: "Google" });
      } catch (error) {
        this.$q.notify({ color: "danger", message: error.message });
      }
    }
  }
};
</script>

<style lang="scss">
.register-page {
  &__form-card {
    padding: 2rem;
    width: 25%;

    @media only screen and (max-width: 640px) {
      width: 75%;
    }

    @media only screen and (max-width: 1024px) {
      width: 75%;
    }
  }

  &__form-logo {
    width: 100px !important;
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
