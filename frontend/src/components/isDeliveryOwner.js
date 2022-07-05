import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function isDeliveryOwner(user) {

    const docRef = doc(db, "deliveries", "HAlkxPUw5AO6zvqtTsHB ");
    const docSnap = await getDoc(docRef);

    if ((docSnap.exists()) && ((docSnap.data().owners.CourierId === user.uid) || (docSnap.data().owners.SenderID === user.uid))) {
        return 'true'
    }
    return 'false'


}
