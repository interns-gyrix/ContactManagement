
import firebase from "firebase";

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

export function signUp() {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword("harshlg929@gmail.com", "password")
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