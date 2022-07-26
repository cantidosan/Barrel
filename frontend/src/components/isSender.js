import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function isSender(user) {

    // eventually replace "UW6... " with userid variable
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if ((docSnap.exists()) && docSnap.data().isCourier === 'false') {

        return 'true'
    } else {
        // doc.data() will be undefined in this case
        return 'false'
    }
}
