import firebaseApp from '@/lib/firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useIdToken } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

function Items (){
    const auth =getAuth(firebaseApp)
    const [user, loading, error] = useIdToken(auth)

    async function handleCreation(){
        try {
            const db = getFirestore(firebaseApp)
            const docRef = await addDoc(collection(db, `${user?.uid}-items`), {
                name:'dress'
            });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
            console.error("Error adding document: ", e);
            }
    }

    async function handleUpdating(){
        try {
            const db = getFirestore(firebaseApp)
            const dressRef = doc(db, `${user?.uid}-items`, "dTYpwPXZg0hgFC4JpBPk");

            // Set the "capital" field of the city 'DC'
            await updateDoc(dressRef, {
              capital: true
            });
            } catch (e) {
            console.error("Error adding document: ", e);
            }
    }

   return <>
   <h1>Create
   </h1>
   <button className="bg-orange-500 p-5 rounded-3xl" onClick={()=>handleCreation()}>Create</button>
   <button className="bg-blue-500 p-5 rounded-3xl" onClick={()=>handleUpdating()}>Update</button>
   </>
}
export default Items