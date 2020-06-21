<template>
  <q-page class="profile-page flex column flex-center">
    <q-card class="profile-page__profile-card">
      <q-avatar class="profile-page__avatar">
        <Avatar :displayName="user.displayName" />
      </q-avatar>
      <span class="profile-page__display-name">{{ user.displayName }}</span>
    </q-card>
    <span class="profile-page__prototypes-title">Prototypes</span>
    <div class="profile-page__prototypes-container">
      <q-card
        v-for="prototype in user.prototypes"
        :key="prototype.uid"
        class="profile-page__prototype-card"
      >
        <iframe 
          :id="prototype.uid"
          class="profile-page__prototype-frame"
        />
        <span 
          class="profile-page__prototype-click-element"
          @click="selectPrototype(prototype)"
        />
      </q-card>
    </div>
    <q-btn
      color="negative"
      class="profile-page__delete-account-button"
      @click="updateDisplayDeleteProfileConfirmationModal(true)"
    >
      Delete Account
    </q-btn>
  </q-page>
</template>

<script>
import { userGetters, interfaceActions, fiddleActions } from "../store/helpers";
import { constructHTML } from "../helpers/result-helpers";
import Avatar from "../components/avatar.vue";
export default {
  components: {
    Avatar
  },
  computed: {
    ...userGetters
  },
  mounted() {
    this.populatePrototypes();
  },
  methods: {
    ...fiddleActions,
    ...interfaceActions,
    populatePrototypes() {
      this.user.prototypes.forEach(prototype => {
        let doc;
        const iframe = document.getElementById(prototype.uid);

        const results = constructHTML(prototype);

        if (iframe.contentDocument) doc = iframe.contentDocument;
        else if (iframe.contentWindow) doc = iframe.contentWindow.document;
        else doc = iframe.document;

        iframe.contentWindow.console.log = () => {};

        doc.open();
        doc.writeln(results);
        doc.close();

      });
    },
    selectPrototype(prototype) {
      this.$gtag.event('prototype seleced', { method: 'Google' })
      this.updateFiddle(prototype)
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss">
.profile-page {
  &__profile-card {
    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    @media only screen and (max-width: 767px) {
      width: 90%;
    }
  }

  &__avatar {
    margin-bottom: 1rem;
  }

  &__display-name {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &__prototypes-title {
    font-size: 2rem;
    font-weight: 700;
  }

  &__prototypes-container {
    position: relative;
    display: flex;
    width: 50%;
    justify-content: center;
    margin-bottom: 2rem;

    @media only screen and (max-width: 1023px) {
      width: 75%;
    }
  }

  &__prototype-card {
    margin: 0.5rem;
    overflow: hidden;
  }

  &__prototype-frame {
    border: 0;
  }

  &__prototype-click-element {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
