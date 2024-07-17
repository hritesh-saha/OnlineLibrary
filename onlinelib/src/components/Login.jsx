import React from 'react';
import { Link } from 'react-router-dom';
import { useRef,useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate=useNavigate();
  const ref = useRef();
  const passwordRef = useRef();
  const [user,setUser]=useState({email:"",password:""});

  const showPassword = () => {
    passwordRef.current.type = "password";
    if (ref.current.src.includes("/closeeye.jpg")) {
      passwordRef.current.type = "text";
      ref.current.src = "/openeye.png";
    } else {
      ref.current.src = "/closeeye.jpg";
      passwordRef.current.type = "password";
    }
  };

  let name,value;
  const handleChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  };

  const postData = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://online-library-backend-gilt.vercel.app/login", {
        //username: user.username,
        email: user.email,
        password: user.password,
      });
      navigate("/home");
  
      if (response.status === 200) {
        console.log("Login Successful");
        window.alert("Login Successful");
        
      } else {
        console.log("Invalid Login");
        window.alert("Invalid Login");
      }
    } catch (error) {
      console.error("Error during Login:", error);
      window.alert("Error during Login. Please try again.");
    }
  };





  return (
    <div style={{display:'flex',color:"#2a255a",maxWidth:"500px",margin:"100px auto",fontFamily:"monospace"}}>
        <form style={{backgroundColor:"rgba(255, 250, 250, 0.5)",height:"600px",display:"flex",flexDirection:"column",justifyContent:"center",border:"2px solid white",padding:"0 23px 23px 23px",borderRadius:"20px",boxShadow:"1px 1px 30px white"}} >
            <h1 style={{textAlign:"center",fontSize:"35px",marginBottom:"40px"}}>Login</h1>
            <p style={{fontSize:"15px",marginBottom:"44px"}}>Please fill this form to login to your account</p>

            {/*<label htmlFor="Username">UserName</label>

            <input type="text" placeholder="Enter Username" name="username" required value={user.username} onChange={handleChange} style={{maxWidth:"500px",padding:"15px",margin:"5px 0 22px 0",display:"inline-block",border:"none",borderRadius:"5px"}}/>*/}

            <label style={{textTransform:"uppercase",letterSpacing:"2px",fontWeight:"600",fontSize:"18px"}} htmlFor='email' >Email</label>
            
            <input type="email" name='email' placeholder='Enter Email' onChange={handleChange} value={user.email} required style={{maxWidth:"500px",padding:"15px",margin:"5px 0 22px 0",display:"inline-block",border:"solid 2px #2a255a",borderRadius:"5px",marginBottom:"35px"}} />
            
            <label style={{textTransform:"uppercase",letterSpacing:"2px",fontWeight:"600",fontSize:"18px"}} htmlFor="password">Password</label>
            
            <div style={{position:"relative"}}>
            <input ref={passwordRef} type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter password' required style={{minWidth:"450px",padding:"15px",margin:"5px 0 22px 0",display:"inline-block",border:"solid 2px #2a255a",borderRadius:"5px"}}/>
            <span className="absolute right-[3px] top-[4px] cursor-pointer" style={{position:"absolute",right:"14px",top:"14px",cursor:"pointer"}} onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="/closeeye.jpg" alt="eye"/>
              </span>
              </div>
            
            {/*<label htmlFor="checkbox"><input type="checkbox"  />Remember Me</label>*/}
            <p style={{fontSize:"14px"}}>By creating an account you agree to our <span style={{textDecoration:"underline",cursor:"pointer",color:"#505bdb"}}>Terms & Privacy</span></p>
            <div>
            <div className="button" style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
              <button onClick={postData} style={{padding:"14px 20px",margin:"8px 0",border:"none",cursor:"pointer",opacity:"0.9",borderRadius:"12px",fontWeight:"700",width:"100px",font:"bold",backgroundColor:"#2a255a"}} type="submit"><Link style={{textDecoration:"none",color:"white",fontWeight:"700"}} to="/home">Login</Link></button>
              </div>
                
                <p style={{fontSize:"14px"}}>Don't Have an Account? <Link to="/">SignUp</Link></p>
            </div>
        </form>
    </div>
  )
}
