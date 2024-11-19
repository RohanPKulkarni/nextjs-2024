import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHttpsLmLMgwqS0LEMFjKPK0Wbv-NRQKg",
  authDomain: "noterit-2024.firebaseapp.com",
  projectId: "noterit-2024",
  storageBucket: "noterit-2024.firebasestorage.app",
  messagingSenderId: "960590259319",
  appId: "1:960590259319:web:f32519aae3f7739700d272"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };

