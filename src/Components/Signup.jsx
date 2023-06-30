import {React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

function Signup() {
    const [flag, setflag]  = useState(false);
    const [Signupflag, setSignupflag]  = useState(false)
    const [signup, setSignup] =  useState({name:"",email:"",password:""});
 const navigate =  useNavigate();
 function gotologin(){
 navigate("/login");
}
  const handleSignup = ()=>{
         const {name, email, password} =  signup;
         const payload = {name, email, password}

        if(name && email &&password){
setflag(false);
    fetch("https://lonely-purse-colt.cyclic.app/user/signup", {
      method : "POST",
      headers : {'Content-Type':'application/json' },
      body : JSON.stringify(payload)
    }).then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    setSignupflag(true);
    const myTimeout = setTimeout(gotologin, 3000)
  }
  else{
setflag(true);
  }
  }
return (
<div>
  <br /><br /><br />
  {/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */}
  <div style={{boxShadow:"0px 5px 15px", width:"600px", margin:"auto", padding:"20px"}}>
     <h1 style={{fontSize:"35px"}}>Signup</h1><br />
  { flag ? <h3 style={{color:"red"}}> Please fill all the entries !</h3> : null}
  { Signupflag ? <> <h3 style={{color:"green"}}> Signup Succesful. Redirecting to login page...</h3> </> : null }
  <Input placeholder='Enter Name' width="500px" onChange={(e)=>{setSignup({...signup,name:e.target.value})}}/> <br />
<br />
   <Input placeholder='Enter Email' width="500px" onChange={(e)=>{setSignup({...signup,email:e.target.value})}}/>  <br />
  <br />
  {/* <input type="email" placeholder='Enter Email' style={{color:"black", padding:"5px", margin:"7px"}} onChange={(e)=>{setSignup({...signup,email:e.target.value})}} /> <br /> */}

  <Input placeholder='Enter Password' width="500px" onChange={(e)=>{setSignup({...signup,password:e.target.value})}}/> <br />
  <br />
  {/* <input type="password" placeholder='Enter Password' style={{color:"black", padding:"5px"}} onChange={(e)=>{setSignup({...signup,password:e.target.value})}}/><br /><br />
  <button style={{color:"black"}} onClick={handleSignup}>Submit</button> */}
  <Button colorScheme='blue'  onClick={handleSignup} >Signup</Button>
  </div>
</div>
)
}



export default Signup



// import Dashboard from './Dashboard'
// import Login from './Login'
// import Signup from './Signup'