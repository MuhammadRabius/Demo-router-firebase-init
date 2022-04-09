import React from 'react';
import useFirebase from './../../CustomHook/useFirebase';

const Login = () => {

      const {singInWithGoogle}=useFirebase();
      return (
            <div style={{fontSize:'25px',margin:'20px'}}>
                  <h1>Please Log in</h1>
                  <div style={{margin:'20px'}}>
                        <button onClick={singInWithGoogle} style={{padding:'15px'}}>Google Sing In</button>
                  </div>
                  <form>
                       
                       <input type="email" name="email" placeholder='Your Email' id="3" /> <br />
                       <input type="password" name="" id="4" placeholder='Your Password' /> <br />
                       <input type="submit" value="login" />

                  </form> 
            </div>
      );
};

export default Login;