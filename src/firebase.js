import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
	.initializeApp({
		apiKey: "AIzaSyChnuaMEbxb-aAPiVfDwwxe5nsMdvm1qBQ",
		authDomain: "jays-chat.firebaseapp.com",
		projectId: "jays-chat",
		storageBucket: "jays-chat.appspot.com",
		messagingSenderId: "4496340183",
		appId: "1:4496340183:web:78bce92cc7bb67d5f2ac92",
	})
	.auth();
