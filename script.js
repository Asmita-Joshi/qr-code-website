import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Extract session ID from QR code link
const sessionId = "session-" + Math.random().toString(36).substr(2, 9);

onSnapshot(doc(db, "sessions", sessionId), (doc) => {
    if (doc.exists() && doc.data().status === "authenticated") {
        document.getElementById("status").innerText = "✅ Authentication Successful!";
        setTimeout(() => window.location.href = "thankyou.html", 2000);
    }
});
