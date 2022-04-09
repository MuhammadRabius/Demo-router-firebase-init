import { useState } from "react"
import app from './../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


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


       return {user,setUser,singInWithGoogle}
   


}

export default useFirebase;