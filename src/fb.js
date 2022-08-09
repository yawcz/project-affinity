// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZGDQpOYSvZzZ9yBP7Tfw7mMPFlHbAIUc',
  authDomain: 'project-affinity-c5841.firebaseapp.com',
  projectId: 'project-affinity-c5841',
  storageBucket: 'project-affinity-c5841.appspot.com',
  messagingSenderId: '693046356638',
  appId: '1:693046356638:web:b925bac3e3eaaa59d4e98f',
  measurementId: 'G-QYMQ8NTGLC',
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore();

export default db;
