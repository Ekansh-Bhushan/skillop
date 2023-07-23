import { EMAIL_KEY, setItem } from "../../localStorageConfig";
import { db } from "../firebaseConfig";
import {  doc, setDoc } from 'firebase/firestore/lite';


async function createUser({ user }) {
    try {
        
        const userRef = doc(db, "users", user.email);
        setItem(EMAIL_KEY,user.email)
        await setDoc(userRef, {
            name:user.name,
            email:user.email,
            picture:user.picture,
            sub:user.sub
        });
        
    } catch (e) {
        // console.log(e);
        
    }

}


async function getUser() {
   



}



export {
    createUser,
    getUser
}