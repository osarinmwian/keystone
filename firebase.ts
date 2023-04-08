import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDJel6oTBXVCxtoUXruLuQnBp5I1ApYWhg",
  authDomain: "fb-keystonestore.firebaseapp.com",
  projectId: "fb-keystonestore",
  storageBucket: "fb-keystonestore.appspot.com",
  messagingSenderId: "1098535176669",
  appId: "1:1098535176669:web:684a176754f446e6110e34"
};

export const firebase_app = initializeApp(firebaseConfig);
export const firebase_storage = getStorage(firebase_app);
export const firebase_db = initializeFirestore(firebase_app, {
  experimentalForceLongPolling: true,
});

