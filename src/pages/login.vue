<template>
  <q-page class="login-page flex flex-center" @keydown.enter="attemptToLogUserIn">
    <q-card class="login-page__form-card">
      <img src="../assets/logo.png" class="login-page__form-logo" />
      <span class="login-page__form-title">Proto Dev</span>
      <q-input
        v-model="loginForm.email"
        label="Email"
        type="email"
        class="login-page__form-input"
        filled
        @focus="$v.loginForm.email.$reset()"
        @input="$v.loginForm.email.$touch()"
      />
      <div v-if="$v.loginForm.email.$error" class="login-page__error-container">
        <span v-if="!$v.loginForm.email.required" class="login-page__error"
          >Email is required</span
        >
        <span v-if="!$v.loginForm.email.email" class="login-page__error"
          >Please enter a valid email</span
        >
      </div>
      <q-input
        v-model="loginForm.password"
        label="Password"
        type="password"
        class="login-page__form-input"
        filled
        @focus="$v.loginForm.password.$reset()"
        @input="$v.loginForm.password.$touch()"
      />
      <div
        v-if="$v.loginForm.password.$error"
        class="login-page__error-container"
      >
        <span class="login-page__error">Password is required</span>
      </div>
      <div class="flex">
        <q-btn color="black" label="Login" @click="attemptToLogUserIn" />
        <q-btn label="Register" flat @click="$router.push('/register')" />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { userActions } from "../store/helpers";
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    loginForm: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },

  methods: {
    ...userActions,
    async attemptToLogUserIn() {
      try {
        this.$v.loginForm.$touch();
        if (this.$v.loginForm.$error) {
          this.error = "An error occurred. Please try again.";
          return;
        }

        const payload = {
          email: this.loginForm.email,
          password: this.loginForm.password
        };
        await this.loginUser(payload);
      } catch (error) {
        this.$q.notify({ color: "negative", message: error.message });
      }
    }
  }
};
</script>

<style lang="scss">
.login-page {
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
