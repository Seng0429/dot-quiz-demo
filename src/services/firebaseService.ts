import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyC8kDy7fSlYKutS-aWA0d1koDaXrlaRqi8",
	authDomain: "dotquiz-1cb2a.firebaseapp.com",
	projectId: "dotquiz-1cb2a",
	storageBucket: "dotquiz-1cb2a.firebasestorage.app",
	messagingSenderId: "340286856052",
	appId: "1:340286856052:web:43eadfeaaef1dbb4c4aa21",
	measurementId: "G-0VTL994MEC"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }