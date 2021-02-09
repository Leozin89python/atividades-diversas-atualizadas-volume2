import Db from 'firebase'
import 'firebase/database'
import 'firebase/auth'

    let firebaseConfig = {
        apiKey: "AIzaSyDQAPOtPfoiI4mX8JDxBvP3x78I29dT7to",
        authDomain: "site-97f85.firebaseapp.com",
        databaseURL: "https://site-97f85-default-rtdb.firebaseio.com",
        projectId: "site-97f85",
        storageBucket: "site-97f85.appspot.com",
        messagingSenderId: "256247863638",
        appId: "1:256247863638:web:a7f98d8e2ee1be6bc51ef7"
    };
    // Initialize Firebase
    Db.initializeApp(firebaseConfig);

export default Db


