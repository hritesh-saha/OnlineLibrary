import React from 'react'
import { Link } from 'react-router-dom'

export default function Subject() {

  return (
    <div style={{padding:"23px",color:"white",minHeight:"80vh",fontFamily:"monospace"}}>
      <h1 style={{textAlign:"center",fontSize:"40px",textTransform:"uppercase"}}>Subjects</h1>
      <br />
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"#2a255a"}} className="boxes">
      <div style={{backgroundColor:"rgba(255, 250, 250, 0.5)",marginLeft:"40px",border:"solid 2px white",height:"260px",minWidth:"240px",borderRadius:"12px",boxShadow:"1px 1px 30px white"}} className="box1">
      <h3 style={{fontSize:"25px",textDecoration:"underline",textAlign:"center"}}>Core Subjects</h3>
      <ul >
        <li  style={{fontSize:"18px",marginBottom:"6px"}}><Link className='list' style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",cursor:"pointer"}} to="/home//physics">Physics</Link></li>
        <li style={{fontSize:"18px",marginBottom:"6px"}}><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",cursor:"pointer"}} to="/home//chemistry">Chemistry</Link></li>
        <li style={{fontSize:"18px",marginBottom:"6px"}}><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",cursor:"pointer"}} to="/home//mechanics">Mechanics</Link></li>
      </ul>
      </div>
      <div style={{backgroundColor:"rgba(255, 250, 250, 0.5)",marginLeft:"40px",border:"solid 2px white",height:"260px",maxWidth:"240px",borderRadius:"12px",boxShadow:"1px 1px 30px white"}} className="box2">
      <h3 style={{fontSize:"25px",textDecoration:"underline",textAlign:"center"}}>Programming Languages</h3>
      <ul >
        <li style={{fontSize:"18px",marginBottom:"6px"}}><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",cursor:"pointer"}} to="/home//python">Python</Link></li>
        <li style={{fontSize:"18px",marginBottom:"6px"}}><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",cursor:"pointer"}} to="/home//cplusplus" >C++</Link></li>
        <li style={{fontSize:"18px",marginBottom:"6px"}}><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",cursor:"pointer"}} to="/Morebooks//Java">Java</Link></li>
        <li style={{fontSize:"18px",marginBottom:"6px"}}><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",cursor:"pointer"}} to="/Morebooks//Ruby">Ruby</Link></li>
        <li style={{fontSize:"18px",marginBottom:"6px"}}><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",cursor:"pointer"}} to="/Morebooks//Rust">Rust</Link></li>
      </ul>
      </div>
      {/*<div style={{height:"auto",width:"33%"}} className="box3">
        <h3>Extra</h3>
      </div>*/}
      </div>
      
      
    </div>
  )
}
