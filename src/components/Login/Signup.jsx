
import React, { useState } from "react";
import axios from 'axios'
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { CModal,CButton ,CModalTitle,CModalBody,CModalHeader
} from '@coreui/react'
// import { Input, Ripple, initMDB } from "mdb-ui-kit";
// initMDB({ Input, Ripple })

const Signup= ({showModal,setShowModal}) => {
const [Name, setName] = useState('');
const [Email, setEmail] = useState('');
const [Password, setPassword] = useState('');

async function registerapi() {
console.log("No call fn register")
try {
  const res = await axios.post('http://localhost:8080/auth/create-user', {
    name: Name,
    email: Email,
    password: Password,
  });

  if (res.status === 200) {
    console.log(res.data)
    console.log('done');
  }
} catch (error) {
  console.log(error);
}
}

//const [visible, setVisible] = useState(false)
//const [showMediaIcons, setShowMediaIcons] = useState(false);
return (
<>

    <CModal
    // ... (other props)
    visible={showModal}  // Set visible to true to make the modal initially visible
    onClose={()=>
      {
        setShowModal(!showModal)
      }
    }  // Pass the onClose prop to handle closing
    aria-labelledby="VerticallyCenteredExample" 
  >
     <CModalHeader closeButton>
       <CModalTitle id="VerticallyCenteredExample">Create Account</CModalTitle>
     </CModalHeader>
     <CModalBody>

     <form>

<div className="form-outline mb-4">
<input type="text" id="form3Example1cg" className="form-control form-control-lg"     value={Name} onChange={(e) => setName(e.target.value)} />
<label className="form-label" for="form3Example1cg"

//  onChange={(e)=>setName(e.target.value)}

 >Your Name </label>
</div>

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
  className="btn btn-success btn-block btn-md gradient-custom-4 text-body" onClick={registerapi}>Register</button>
</div>

<p className="text-center text-muted mt-5 mb-0">Have already an account? {Name}<a href="#!"
  className="fw-bold text-body"><u>Login here </u></a></p>

</form>


  <GoogleOAuthProvider clientId="303510109770-oq7krodukoj36c3rl3k207t04ht0euak.apps.googleusercontent.com">
  <GoogleLogin
onSuccess={credentialResponse => {
console.log(credentialResponse);
}}
onError={() => {
console.log('Login Failed');
}}
/>
</GoogleOAuthProvider>
     </CModalBody>
   
   </CModal>

</>
);
};

export default Signup;
