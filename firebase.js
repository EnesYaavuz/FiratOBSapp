// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6jLbAXLnn5e7XRVFEPKaLbsPh0M3lLsw",
  authDomain: "login-6ec07.firebaseapp.com",
  projectId: "login-6ec07",
  storageBucket: "login-6ec07.appspot.com",
  messagingSenderId: "471933789260",
  appId: "1:471933789260:web:681cbbcd2551e996aac0e9"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const auth =  firebase.auth();

export {auth};