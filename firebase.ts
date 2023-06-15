// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4EC4m2UOjo5jejk1Il0aoYu-VE3V4g40',
  authDomain: 'chatgpt-messager-266c7.firebaseapp.com',
  projectId: 'chatgpt-messager-266c7',
  storageBucket: 'chatgpt-messager-266c7.appspot.com',
  messagingSenderId: '610874689869',
  appId: '1:610874689869:web:50b4284c7837ff96098f04'
}

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

export const db = getFirestore(app)
