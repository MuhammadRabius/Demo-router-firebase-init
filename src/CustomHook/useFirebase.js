import { useEffect, useState } from "react"
import app from './../firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


const useFirebase =()=>{
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
       const [user,setUser]=useState({}); 

       const singInWithGoogle =()=>{
             signInWithPopup(auth,googleProvider)
             .then(result=>{
                   const user=result.user;
                   setUser(user)
                   console.log(user)
             })
       }
       
      const handleSingOut =()=>{
            signOut(auth)
            .then(()=>{ })
      }
       useEffect(()=>{
             onAuthStateChanged(auth,user=>{
                   setUser(user);
             })
       },[]);
       return {user,setUser,singInWithGoogle,handleSingOut}
   


}

export default useFirebase;