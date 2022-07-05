import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";

//verify that the person interacting with it is
// infact the owner of the object
// func will take user uuid as param


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function isRouteOwner(user) {
    const docRef = doc(db, "routes", "KBce8i07ETSAW4BquqR9");
    const docSnap = await getDoc(docRef);

    if ((docSnap.exists()) && docSnap.data().userId === user.uid) {
        return 'true'
    }
    return false

}
