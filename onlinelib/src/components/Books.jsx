//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Books(props){
    
    return(
    
        <div style={{
        display:"flex",
        backgroundColor:"grey",
        height:"300px",
        border:"solid 2px 2px 2px 2px",
        borderTopColor:"white",
        borderLeftColor:"white",
        borderRightColor:"white",
        borderBottomColor:"white",
        borderStyle:"solid", 
        marginTop:"50px",
        marginBottom:"50px",
        boxShadow:"2px 2px 30px white"

    }}>
        
        <h2 style={{marginTop:"85px",marginBottom:"50px",marginLeft:"20px",color:"#505bdb"}}>{props.title}</h2>
        
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",borderRadius:"20px" }}>{props.body}</div>
        <Link to={props.link} style={{textDecoration:"none"}}><button style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px",width:"120px",marginTop:"132px",height:"40px",borderRadius:"20px",cursor:"pointer",fontWeight:"700"}}>View More</button></Link>
    </div>
    )
}