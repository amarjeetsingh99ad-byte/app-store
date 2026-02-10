// Firebase app already loaded from HTML

const firebaseConfig = {
  apiKey: "PASTE_REAL_API_KEY",
  authDomain: "PASTE_REAL_AUTH_DOMAIN",
  projectId: "PASTE_REAL_PROJECT_ID",
  storageBucket: "PASTE_REAL_STORAGE_BUCKET",
  messagingSenderId: "PASTE_REAL_SENDER_ID",
  appId: "PASTE_REAL_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
