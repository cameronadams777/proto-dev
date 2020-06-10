import firebase from "firebase/app";
import "firebase/auth";

export default {
  state: {
    user: false
  },
  mutations: {
    SET_USER(state, newValue) {
      state.user = newValue;
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    }
  },
  actions: {
    setUser({ commit }, newValue) {
      commit("SET_USER", newValue);
    },
    registerNewUser({ dispatch }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password);

          data.user.updateProfile({
            displayName: payload.name
          });

          await data.user.sendEmailVerification()

          dispatch("setUser", data.user);
        } catch (error) {
          reject(error);
        }
      });
    },
    loginUser({ dispatch }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password);

          const user = {
            
          }

          dispatch("setUser", data.user);
        } catch (error) {
          reject(error);
        }
      });
    },
    logoutCurrentUser({ dispatch }) {
      return new Promise(async (resolve, reject) => {
        try {
          await firebase.auth().signOut();

          dispatch("setUser", false);
        } catch (error) {
          reject(error);
        }
      });
    }
  }
};
