
import React, { useState } from "react";
import axios from 'axios'
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { CModal,CButton ,CModalTitle,CModalBody,CModalHeader
} from '@coreui/react'
// import { Input, Ripple, initMDB } from "mdb-ui-kit";
// initMDB({ Input, Ripple })

const SignIn= ({setShowModal2,showModal2}) => {

const [Email, setEmail] = useState('');
const [Password, setPassword] = useState('');

async function registerapi() {

console.log("No call fn register")
try {
  const res = await axios.post('http://localhost:8080/auth/login', {

    email: Email,
    password: Password,
  });

  if (res.status === 200) {
            console.log(res.data)
                  // Assuming your server returns a token
                  const { jwtToken, username } = res.data;
                  // JSON.stringify converts the jwtToken to a JSON-formatted string
                  var tokenString = JSON.stringify(jwtToken);
                    console.log(tokenString)
                  // localStorage.setItem sets the value in the localStorage with the key 'token'
                  // The value is the string representation of the jwtToken
                  if(jwtToken){
                    localStorage.setItem('token', tokenString)};
        
    
           
            setShowModal2(false)
            console.log('done');
          }
} catch (error) {
  console.log(error);
}
}
// const [pro,setpro]=useState(onClose1);
const handleLoginSuccess = (credentialResponse) => {
  const data=JSON.parse(credentialResponse)
  console.log(credentialResponse +"ddddddddddddd")
  // Extract JWT token from credentialResponse (replace 'jwtToken' with the actual property name)
  const jwtToken = credentialResponse.jwtToken;

  // Store the JWT token in local storage
  localStorage.setItem('token', jwtToken);

  // Log for verification (you can remove this in production)
  console.log('JWT', jwtToken);

  // Perform any additional actions you need after successful login
  // ...
};
// const handleLoginError = () => {
//   console.log('Login Failed********************************');
// }
return (
<>
<CModal
    // ... (other props)
    visible={showModal2}  // Set visible to true to make the modal initially visible
    onClose={()=>setShowModal2(!showModal2)}  // Pass the onClose prop to handle closing
    aria-labelledby="VerticallyCenteredExample" 
  >
     <CModalHeader closeButton>
       <CModalTitle id="VerticallyCenteredExample">Login</CModalTitle>
     </CModalHeader>
     <CModalBody>

     <form>


<div className="form-outline mb-4">
<input type="email" id="form3Example3cg" className="form-control form-control-lg"  onChange={(e)=>setEmail(e.target.value)}/>
<label className="form-label" for="form3Example3cg" >Your Email</label>
</div>

<div className="form-outline mb-4">
<input type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={(e)=>setPassword(e.target.value)} />
<label className="form-label" for="form3Example4cg">Password</label>
</div>



<div className="form-check d-flex justify-content-center mb-5">
<input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
<label className="form-check-label" for="form2Example3g">
  I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
</label>
</div>

<div className="d-flex justify-content-center">
<button type="button"
  className="btn btn-success btn-block btn-md gradient-custom-4 text-body" onClick={registerapi}>   Login</button>
</div>

<p className="text-center text-muted mt-5 mb-0">Have already an account?<a href="#!"
  className="fw-bold text-body"><u>Login here </u></a></p>

</form>


 <GoogleOAuthProvider clientId="287541308564-4jiu4ui9634vl5k4cf4an5htvlhl5un3.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log('Login Failed********************************');
          }}
      />
    </GoogleOAuthProvider>
     </CModalBody>
   
   </CModal>

</>
);
};

export default SignIn;
