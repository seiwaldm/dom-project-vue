import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBu3z6-dhL1eJsjC9yRWnpml4MWF6H7mC79R4",
  authDomain: "dom-project-vue.firebaseapp.com",
  databaseURL: "https://dom-project-vue-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dom-project-vue",
  storageBucket: "dom-project-vue.appspot.com",
  messagingSenderId: "272937777140",
  appId: "1:272937777140:web:32f84f7ccaddc7a0c6aba1",
  measurementId: "G-W7Z1NCRHS6"
};


export const app = firebase
  .initializeApp(firebaseConfig);

export const db = app.database();
