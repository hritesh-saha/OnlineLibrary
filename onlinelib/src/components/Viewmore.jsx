import { Link } from "react-router-dom";

export default function Viewmore(){
    return(
        <div style={{border:"solid 4px 4px 4px 4px white",height:"100px",textAlign:"center"}}>
           <Link to={'/Morebooks'}><button style={{color:"white",backgroundColor:"rgb(128,128,128)",marginTop:"25px", height:"50px",borderRadius:"16px",borderColor:"black",cursor:"pointer",fontWeight:"600",fontSize:"16px"}}>View more books</button></Link>

        </div>
    )
}