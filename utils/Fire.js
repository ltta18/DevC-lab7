import firebase from 'firebase'; // 4.8.1

const firebaseConfig = {
  apiKey: "AIzaSyAdUfkPv_2iXYiaJPjaSO-fpDiH9JjxUEg",
  authDomain: "chatapp-5af29.firebaseapp.com",
  databaseURL: "https://chatapp-5af29.firebaseio.com",
  projectId: "chatapp-5af29",
  storageBucket: "chatapp-5af29.appspot.com",
  messagingSenderId: "55398463712",
  appId: "1:55398463712:web:4115eb4c44bde633253885",
  measurementId: "G-634RPCXBKK"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;