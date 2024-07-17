import logo from "./icon.png";
import { Link, json } from "react-router-dom";
//import {FaSearch} from "react-icons/fa";
import { useState } from "react";
import './Navbar.css'


export default function Navbar(data) {
  const [search,setSearch]=useState("")
  const [nameList,setNameList]=useState([])

  

  

    return (
    <div style={{backgroundColor:"beige",border:"solid"}}>

        <nav style={{backgroundColor:"rgb(128,128,128)",display:"flex",height:"50px",color:"#2a255a"}} className="bg-purple-800 text-#2a255a flex justify-between">
        <img src={logo} style={{display:"flex",alignItems:"center",height:"30px",width:"auto",paddingTop:"0.6rem",paddingLeft:"0.6rem",cursor:"pointer"}} alt="icon" />
          
        <span  style={{fontSize:"1.25rem",color:"black",display:"flex",textDecorationColor:"#2a255a",marginLeft:"10px",marginRight:"0.75rem",fontWeight:"700",alignItems:"center",justifyContent:"flex-start"}}className="text-xl flex text-#2a255a mx-3 font-bold items-center"><Link style={{color:"#2a255a",textDecoration:"none",fontFamily:"monospace",fontSize:"19px"}} to="/home">InfiniteLibrary</Link></span>
        <ul style={{listStyle:"none",paddingLeft:"7rem",paddingRight:"7rem",paddingTop:"1.5rem",paddingBottom:"1.5rem",display:"flex",justifyContent:"flex-end",marginRight:"2.75rem",marginLeft:"200px",alignItems:"center"}} className="px-28 py-4 flex space-x-11 justify-end">
            <li style={{cursor:"pointer",marginLeft:"1.75rem",marginBottom:"32px",fontWeight:"600",marginTop:"6px"}} className="link"><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",fontFamily:"monospace",fontSize:"19px"}} to="/home">Home</Link></li>
            <li style={{cursor:"pointer",marginLeft:"1.75rem",marginBottom:"32px",fontWeight:"600",marginTop:"6px"}} className="link"><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",fontFamily:"monospace",fontSize:"19px"}} to="/subject">Subjects</Link></li>
            <li style={{cursor:"pointer",marginLeft:"1.75rem",marginBottom:"32px",fontWeight:"600",marginTop:"6px"}} className="link"><Link style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",fontFamily:"monospace",fontSize:"19px"}} to="/">Login/SignUp</Link></li>
            <li style={{cursor:"pointer",marginLeft:"1.75rem",marginBottom:"32px",fontWeight:"600",marginTop:"6px"}} className="link"><Link  to="/review"style={{color:"#2a255a",textDecoration:"none",fontWeight:"700",fontFamily:"monospace",fontSize:"19px"}} >Reviews</Link></li>
        </ul>
        {/*
        <div style={{display:"flex"}} className="d-flex" role="search">
          
          <FaSearch style={{marginTop:"8px",marginLeft:"270px",backgroundColor:"white",padding:"9px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px",boxShadow:"0 0 8px #ddd"}}/>
        <input style={{alignContent:"center",marginTop:"8px",marginBottom:"8px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px",justifyContent:"flex-end",border:"none",outline:"none",boxShadow:"0 0 8px #ddd"}}className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} aria-label=" Search"/>

      </div>*/}
       </nav>
    </div>
    )
  }
  
  