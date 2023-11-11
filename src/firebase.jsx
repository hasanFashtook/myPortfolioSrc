import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPRGDin9mCiLVLZ2-WU725Yda47C0qNKg",
  authDomain: "portfolio-emails-62366.firebaseapp.com",
  databaseURL: "https://portfolio-emails-62366-default-rtdb.firebaseio.com",
  projectId: "portfolio-emails-62366",
  storageBucket: "portfolio-emails-62366.appspot.com",
  messagingSenderId: "39712288781",
  appId: "1:39712288781:web:8b8de9024b06455866a544",
}
const app = initializeApp(firebaseConfig);

var db = getFirestore(app);

export { db };



