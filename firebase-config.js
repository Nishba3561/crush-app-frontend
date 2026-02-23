import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMS-d5nJ8LcIxJrpUU9k0tniF7iyUHnJs",
  authDomain: "crush-app-3567b.firebaseapp.com",
  projectId: "crush-app-3567b",
  storageBucket: "crush-app-3567b.firebasestorage.app",
  messagingSenderId: "1049760010611",
  appId: "1:1049760010611:web:2e835a0dafa23455ceb506"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
