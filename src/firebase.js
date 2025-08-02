import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4cJDVI2YNwBJktDT2s-YkVb-yhlMskB8",
  authDomain: "authentication-2abde.firebaseapp.com",
  projectId: "authentication-2abde",
  storageBucket: "authentication-2abde.appspot.com", // Fixed URL
  messagingSenderId: "529528191111",
  appId: "1:529528191111:web:d6514eaeaddc702673a022",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };
