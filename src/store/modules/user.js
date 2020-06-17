import { firebaseAuth, firestore } from '../../boot/firebase';

const userCollection = firestore.collection('users');

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
    getUserData({}, user) {
      return new Promise(async (resolve, reject) => {
        try {
          const docRef = await userCollection.doc(user.uid).get();

          const userRef = docRef.data();

          resolve(userRef);
        } catch(error) {
          reject();
        }
      })
    },
    setUser({ commit }, newValue) {
      commit("SET_USER", newValue);
    },
    registerNewUser({ dispatch }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await firebaseAuth
            .createUserWithEmailAndPassword(payload.email, payload.password);

          data.user.updateProfile({
            displayName: payload.name
          });

          await data.user.sendEmailVerification()

          const user = {
            uid: data.user.uid,
            displayName: data.user.displayName,
            email: data.user.email,
            prototypes: []
          };

          userCollection.doc(data.user.uid).set(user);

          dispatch("setUser", user);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    loginUser({ dispatch }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await firebaseAuth
            .signInWithEmailAndPassword(payload.email, payload.password);

          const docRef = await userCollection.doc(data.user.uid).get();

          if(!docRef.exists) {
            firebaseAuth.signOut();
            throw Error('Oops, we could not find your user...')
          }

          const userRef = docRef.data();

          dispatch("setUser", userRef);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    logoutCurrentUser({ dispatch }) {
      return new Promise(async (resolve, reject) => {
        try {
          await firebaseAuth.signOut();

          dispatch("setUser", false);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    deleteUserAccount({ state, dispatch }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await firebaseAuth
            .signInWithEmailAndPassword(state.user.email, payload.password);

          await data.user.delete();

          dispatch("setUser", false);
          resolve();
        } catch (error) {
          reject(error);
        }
      })
    },
    addFiddleToPrototypes({ state, rootState, dispatch }) {
      if(state.user.prototypes.find(prototype => prototype.uid === rootState.fiddle.fiddle.uid)) return;
      const newUserValue = {
        ...state.user,
        prototypes: state.user.prototypes.concat(rootState.fiddle.fiddle)
      };

      userCollection.doc(state.user.uid).set(newUserValue);

      dispatch('setUser', newUserValue)
    }
  }
};
