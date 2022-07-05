import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function isDeliveryOwner(user) {
    console.log('user', user.uid)
    const docRef = doc(db, "deliveries", "HAlkxPUw5AO6zvqtTsHB");
    const docSnap = await getDoc(docRef);
    console.log('1', docSnap.data().owners.CourierId)
    console.log('2', docSnap.data().owners.SenderId)
    console.log('uid', 'UW6Ys4EnOMQufwKTUoKPpdcYXYc2')



    if ((docSnap.exists()) && ((docSnap.data().owners.CourierId === user.uid) || (docSnap.data().owners.SenderId === user.uid))) {
        return 'true'
    }
    return 'false'


}
