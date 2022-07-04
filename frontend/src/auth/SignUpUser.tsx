import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "../FirebaseConfig";
import { createUser } from '../components/CreateUser'




// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



export function signUpUser(values: any) {

    createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {

            console.log('credentials', userCredential.user.uid)

            const uid = userCredential.user.uid
            const user = userCredential.user
            createUser(values, uid)

            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { errorCode, errorMessage }

        })
}
