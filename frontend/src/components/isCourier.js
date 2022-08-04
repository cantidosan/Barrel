import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// validates the users role in the DB and returns true if they are
//a courier.
// func will eventually take userid as a param


export async function isCourier(user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if ((docSnap.exists()) && docSnap.data().isCourier === "true") {
        return 'true'
    } else {
        // doc.data() will be undefined in this case
        return 'false'
    }
}
