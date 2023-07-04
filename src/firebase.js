import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // si está utilizando la base de datos en tiempo real

const firebaseConfig = {
  // su configuración aquí
  apiKey: "AIzaSyAnGwUGV36Bju7UObjEpcW7NHExljBeh1A",
  authDomain: "topi-893c0.firebaseapp.com",
  projectId: "topi-893c0",
  storageBucket: "topi-893c0.appspot.com",
  messagingSenderId: "98832827489",
  appId: "1:98832827489:web:af5ee092da4e1d02c8d620"
};

// firebase.initializeApp(firebaseConfig);

// export default firebase;
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;