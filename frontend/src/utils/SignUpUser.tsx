import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../FirebaseConfig";




// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export function signUpUser(email: any, password: any) {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            console.log('credentials', userCredential)

            const user = userCredential.user
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        })
}
