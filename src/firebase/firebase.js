import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPUJEFbjVSDaluvyrgI-OCMshUpuuvj_I",
  authDomain: "insta-clone-dac06.firebaseapp.com",
  projectId: "insta-clone-dac06",
  storageBucket: "insta-clone-dac06.appspot.com",
  messagingSenderId: "475216985733",
  appId: "1:475216985733:web:3962b27ea425fe087d33ec",
  measurementId: "G-WSRKVHB5CV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
