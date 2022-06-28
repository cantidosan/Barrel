import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, Auth, AuthProvider, setPersistence, browserSessionPersistence } from "firebase/auth";
import { stringify } from "querystring";
import { firebaseConfig } from "../FirebaseConfig";



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


const provider = new GoogleAuthProvider();



export function signInWithGoogle() {

    setPersistence(auth, browserSessionPersistence)
        .then((result) => {

            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential?.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    return user
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                    return errorMessage
                })
        })
}
export function signIn(email: string, password: string) {

    setPersistence(auth, browserSessionPersistence)
        .then((result) => {

            signInWithEmailAndPassword(auth, email, password)

                .then((result: any) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential?.accessToken;
                    // The signed-in user info.
                    const user = result.user;

                    // ...
                }).catch((error: any) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...

                })
        })
}
