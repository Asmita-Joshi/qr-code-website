import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBY-C5jBWZZggIu_2klqL6fDeMLF6jdZXc",
    authDomain: "qr-system-f5ffe.firebaseapp.com",
    projectId: "qr-system-f5ffe",
    storageBucket: "qr-system-f5ffe.appspot.com",
    messagingSenderId: "1049926600704",
    appId: "1:1049926600704:web:ca197835a830bc6769b0e5",
    measurementId: "G-QBBR7SYRMZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
