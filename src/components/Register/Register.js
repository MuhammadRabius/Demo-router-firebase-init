import React from 'react';

const Register = () => {
      return (
            <div>
                  <h1>Please Register</h1>
                 <form>
                       <input type="text" placeholder='Your Name' /> <br />
                       <input type="email" name="email" placeholder='Your Email' id="2" /> <br />
                       <input type="password" name="" id="1" placeholder='Your Password' /><br />
                       <input type="submit" value="register" />

                  </form> 
            </div>
      );
};

export default Register;