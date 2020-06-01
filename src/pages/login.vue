<template>
  <q-page class="login-page flex flex-center">
    <q-card class="login-page__form-card">
      <img src="../assets/logo.png" class="login-page__form-logo" />
      <span class="login-page__form-title">Proto Dev</span>
      <q-input
        v-model="loginForm.email"
        label="Email"
        type="email"
        class="login-page__form-input"
        filled
      />
      <q-input
        v-model="loginForm.password"
        label="Password"
        type="password"
        class="login-page__form-input"
        filled
      />
      <div class="flex">
        <q-btn color="black" label="Login" @click="attemptToLogUserIn" />
        <q-btn label="Register" flat @click="$router.push('/register')" />
      </div>
    </q-card>
  </q-page>
</template>

<script>
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
  methods: {
    ...userActions,
    async attemptToLogUserIn() {
      try {
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
}
</style>
