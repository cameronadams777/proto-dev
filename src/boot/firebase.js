import firebase from 'firebase/app'

export default async () => {
  const config = {
    apiKey: "AIzaSyBQ75SIkoxX8HSYzjraWjTg_StWan_CZh0",
    authDomain: "proto-dev-dfd01.firebaseapp.com",
    databaseURL: "https://proto-dev-dfd01.firebaseio.com",
    projectId: "proto-dev-dfd01",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  firebase.initializeApp(config);
};
