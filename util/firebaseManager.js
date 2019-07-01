
import * as firebase from "firebase";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAH92miq9unt_KibKzIOa7979fsSFRN2D8",
  authDomain: "smartreach-7bd09.firebaseapp.com",
  databaseURL: "https://smartreach-7bd09.firebaseio.com",
  projectId: "smartreach-7bd09",
  storageBucket: "",
  messagingSenderId: "944801645365",
  appId: "1:944801645365:web:1aeabb01af09cf8c"
};

export function initialiseFirebase() {
  if (!firebase.apps.length) {
    console.log("Initialize");
    firebase.initializeApp(firebaseConfig);
  }
}

export function signUp(details) {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(details.email, details.password)
      .then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
  })
}

export function sendVerificationEmail(data) {
  return new Promise((resolve, reject) => {
    data.user.sendEmailVerification()
      .then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
  })
}

export function signIn(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  })
}



export function setData(data) {
  return new Promise((resolve, reject) => {
    var db = firebase.firestore();
    db.collection(data.email).add({
      mobileNumber: data.mobileNumber,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  })
}

export function readData(data) {
  return new Promise((resolve, reject) => {
    var db = firebase.firestore();
    db.collection(data.email).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc);
          resolve(doc);
        });
      })
      .catch((error) => {
        reject(error);
      });
  })
}
