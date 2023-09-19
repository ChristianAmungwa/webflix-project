// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7eE1R_s7hzPCkfSp01_6eNrEQj4UqgOs",
  authDomain: "webflix-379ad.firebaseapp.com",
  projectId: "webflix-379ad",
  storageBucket: "webflix-379ad.appspot.com",
  messagingSenderId: "765086752048",
  appId: "1:765086752048:web:4f44b9c595706fccba7cf5"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
