import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBBvURQwAXuBU6MXFBaCcVZQMFIv0exHw",
    authDomain: "brand-shop-client-28f8e.firebaseapp.com",
    projectId: "brand-shop-client-28f8e",
    storageBucket: "brand-shop-client-28f8e.appspot.com",
    messagingSenderId: "911347246895",
    appId: "1:911347246895:web:b294cb315cba7a199ee3da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;