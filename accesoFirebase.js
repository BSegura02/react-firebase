// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2QNT1Vf2c83LNL1Tl0gnFwo2Fw9dvd3A",
  authDomain: "my-project-e1bae.firebaseapp.com",
  projectId: "my-project-e1bae",
  storageBucket: "my-project-e1bae.appspot.com",
  messagingSenderId: "563751750960",
  appId: "1:563751750960:web:79db3f731c4054c3820cf5",
  measurementId: "G-1J3FWP0ZEK"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default appFirebase