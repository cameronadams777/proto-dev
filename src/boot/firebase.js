import firebase from 'firebase/app'

export default async () => {
  const config = process.env.FIREBASE_CONFIG;

  firebase.initializeApp(config);
};
