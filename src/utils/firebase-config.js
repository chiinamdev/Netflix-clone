
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAkwY4BwLeTOv_gxBt8m8FBmv0xnQf_jRA",
  authDomain: "netflix-clone-79311.firebaseapp.com",
  projectId: "netflix-clone-79311",
  storageBucket: "netflix-clone-79311.firebasestorage.app",
  messagingSenderId: "240899289384",
  appId: "1:240899289384:web:c2434f71804fdee4ad601d",
  measurementId: "G-6ZG28LXL9W"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)