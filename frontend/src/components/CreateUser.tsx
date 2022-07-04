import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";


const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function createUser(values: any, uid: any) {
    console.log(values.cellular)
    console.log(values.email)
    console.log(values.password)
    console.log(values.username)
    console.log(values.firstName)
    console.log(values.lastName)
    console.log(`${!!values.user.sender ? true : false}`)

    await setDoc(doc(db, "users", `${uid}`), {

        cell: values.cellular,
        email: values.email,
        f_name: values.firstName,
        isCourier: `${!!values.user.sender ? true : false}`,
        l_name: values.lastName,
        passport_number: '',
        username: values.username
    })

}
