import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyAV2tBRUqNuNT5IvUk5caZHrpRykHNIDwM',
  authDomain: 'project-affinity-205e9.firebaseapp.com',
  projectId: 'project-affinity-205e9',
  storageBucket: 'project-affinity-205e9.appspot.com',
  messagingSenderId: '769008103110',
  appId: '1:769008103110:web:e37be0469f11615b5631c7',
  measurementId: 'G-730DCS3W38',
});

const db = firebase.firestore();

export default db;