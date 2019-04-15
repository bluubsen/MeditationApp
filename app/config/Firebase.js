import * as firebase from 'firebase';
import * as c from "./constants"

// Initialize Firebase
const firebaseConfig = {
    apiKey: c.FIREBASE_API_KEY,
    authDomain: c.FIREBASE_AUTH_DOMAIN,
    databaseURL: c.FIREBASE_DATABASE_URL,
    projectId: c.FIREBASE_PROJECT_ID,
    storageBucket: c.FIREBASE_STORAGE_BUCKET
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage();