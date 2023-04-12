import { initializeApp } from "firebase/app";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDWXP77pT_hITEiUS0SgIrsHmo6jDYg4Bg",
  authDomain: "form-react-vite.firebaseapp.com",
  projectId: "form-react-vite",
  storageBucket: "form-react-vite.appspot.com",
  messagingSenderId: "661505797884",
  appId: "1:661505797884:web:a9b10fc29acdd81e307179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()

export const addCollectionsAndDocuments = async (user,responses) => {
  const userRef = doc(db, "users", user)
  const userSnapshot = await getDoc(userRef)

  if (!userSnapshot.exists()) {
    try{
      await setDoc(userRef, responses)
      console.log("done")
    }catch(e){
      console.log("error")
    }
  }

  console.log(userRef)
}

export const getDocument = async (user) => {
  const collectionRef = doc(db, "users", user)
  const querySnapshot = await getDoc(collectionRef)

  if(querySnapshot) {
    return querySnapshot.data()
  }else{
    console.log("error")
  }
}