
import * as firebase from "firebase";
import 'firebase/firestore';
import { AsyncStorage } from "react-native"

var firebaseConfig = {
  apiKey: "AIzaSyAH92miq9unt_KibKzIOa7979fsSFRN2D8",
  authDomain: "smartreach-7bd09.firebaseapp.com",
  databaseURL: "https://smartreach-7bd09.firebaseio.com",
  projectId: "smartreach-7bd09",
  storageBucket: "gs://smartreach-7bd09.appspot.com",
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



export function setMyProfile(data) {
  return new Promise((resolve, reject) => {
    var db = firebase.firestore();
    db.collection(data.email).doc("myProfile").set({
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

export function addContact(data) {
  return new Promise((resolve, reject) => {
    var db = firebase.firestore();
    db.collection(data.userEmail).doc("contacts").collection('list').add(data)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  })
}



export function getMyProfileData(email) {
  return new Promise((resolve, reject) => {
    const db = firebase.firestore();
    db.collection(email).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          resolve(doc);
        });
      })
      .catch((error) => {
        reject(error);
      });
  })
}



export function getContacts(email) {
  return new Promise((resolve, reject) => {
    const db = firebase.firestore();
    let contacts = [];
    firebase.firestore().collection(email).doc("contacts").collection("list").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let object = doc.data();
          object.contactKey = doc.id;
          contacts = [...contacts, object]
        });
        resolve(contacts)
      });
  })
}

export function updateContact(details) {
  console.log("TCL: updateContact -> details", details)
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('email')
      .then((res) => {
        if (res) {
          console.log("TCL: updateContact -> res", res)
          let contacts = [];
          firebase.firestore().collection(res).doc("contacts").collection("list").doc(details.contactKey).update(details)
            .then(() => {
              resolve()
            })
            .catch((error) => {
              reject(error)
            })
        }

      })
  })
}

export function checkUser() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(user);
      } else {
        reject();
      }
    });
  })
}

export function logout() {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut()
      .then(() => {
        resolve()
      }).catch((error) => {
        reject()
      });
  })

}

export function uploadImage(blob, email) {
  // console.log("TCL: uploadImage -> ", file)
  return new Promise((resolve, reject) => {
    firebase.storage().ref().child("images/" + email).put(blob)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL()
      })
      .then((downloadURL) => {
        console.log("TCL: AddContact -> uploadImage -> snapshot", downloadURL)
        resolve(downloadURL)
      })
  })

}
