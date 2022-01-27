// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/storage";
import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { getStorage, ref } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWsqHmf3TBUZmv3cO9dbZqHEDgaOO0Ftg",
  authDomain: "facebook-cfbd3.firebaseapp.com",
  projectId: "facebook-cfbd3",
  storageBucket: "facebook-cfbd3.appspot.com",
  messagingSenderId: "317862773296",
  appId: "1:317862773296:web:65f80fd6e851590cf3e3f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);
export { db, storage };
