import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';


function Review() {

const [form,setForm]=useState({ username: "", bookname: "", comment: "" });
const [review,setReview]=useState([]);

const saveReview = () => {
  if (form.username.length > 3 && form.bookname.length > 3 && form.comment.length > 3) {
    const newEntry = { ...form, id: uuidv4() };
    setReview([...review, newEntry]);

    axios.post('https://online-library-onlinelib.vercel.app/review', newEntry)
      .then(response => {
        console.log('Review saved successfully:', response.data);
      })
      .catch(error => {
        console.error('Error saving Review:', error);
      });

    setForm({ username: "", bookname: "", comment: "" });
  } else {
    alert("Minimum length of credentials is 3!");
  }
};

useEffect(() => {
  const fetchReviews = async () => {
    try {
      const response = await axios.get("https://online-library-backend-gilt.vercel.app/review");
      console.log("Fetched reviews:", response.data);
      if (Array.isArray(response.data)) {
        setReview(response.data);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  fetchReviews();
}, []);


const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <div style={{minHeight:"80vh",fontFamily:"monospace"}}>
        <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",color:"white",font:"bold",paddingBottom:"12px",marginLeft:"60px",fontSize:"30px"}}>Reviews</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",gap:"32px",padding:"16px"}}>
            <label style={{font:"bold",color:"white",fontWeight:"800",fontSize:"20px"}} htmlFor="username">Username:</label>

            <input value={form.username} name='username' style={{fontSize:"18px",width:"220px",borderRadius:"12px",height:"25px",border:"solid 3px #2a255a",fontFamily:"monospace"}} type="text" onChange={handleChange}  />

            <label style={{font:"bold",color:"white",fontWeight:"800",fontSize:"20px"}} htmlFor="Bookname">Book Name:</label>

            <input value={form.bookname} name='bookname' style={{fontSize:"18px",width:"220px",borderRadius:"12px",height:"25px",border:"solid 3px #2a255a",fontFamily:"monospace"}} type="text" onChange={handleChange}  />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>

            <label style={{font:"bold",color:"white",fontWeight:"800",fontSize:"20px"}} htmlFor="comment">Comments:</label>
            <input value={form.comment} name='comment' style={{width:"500px",fontSize:"18px",height:"30px",marginLeft:"16px",borderRadius:"12px",border:"solid 3px #2a255a",fontFamily:"monospace"}}  onChange={handleChange} id=""></input>

        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"16px"}}>
            <button style={{padding:"6px",width:"130px",marginLeft:"67px",fontWeight:"700",borderRadius:"16px",height:"40px",color:"#2a255a",cursor:"pointer",backgroundColor:"#89CFF0"}} type='submit' onClick={saveReview}>Post Review</button>
        </div>
        <div  style={{font:"bold",color:"black",fontWeight:"800"}}className="Review-Section">
            <h3 style={{color:"white",fontSize:"25px",marginLeft:"40px"}}>Current Reviews</h3>
            {review.length === 0 && <div> No Reviews to Show </div>}
            {review.length !== 0 && (
            <table
              style={{ minWidth: "1100px",tableLayout:"auto",width:"100%",borderRadius:"20px",overflow:"hidden",marginBottom:"40px" }}
              className="table-auto w-full rounded-lg overflow-hidden mb-10"
            >
              <thead style={{border:"solid 2px",backgroundColor:"#2a255a",color:"#ffffff",fontSize:"19px",fontFamily:"monospace"}} className="bg-green-800 text-black border border-black">
                <tr>
                  <th style={{paddingBottom:"8px",paddingTop:"8px"}} className="py-2">Username</th>
                  <th style={{paddingBottom:"8px",paddingTop:"8px"}} className="py-2">Bookname</th>
                  <th style={{paddingBottom:"8px",paddingTop:"8px"}} className="py-2">Comments</th>
                </tr>
              </thead>
              <tbody style={{backgroundColor:"#7CB9E8",fontSize:"18px"}} className="bg-green-200">
                {review.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td style={{border:"solid 2px black",paddingBottom:"8px",paddingTop:"8px",width:"128px"}} className="border border-black py-2 text-center w-32 ">
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="flex justify-center items-center">
                          <span className="" >
                            {item.username}
                          </span>
                        </div>
                      </td>
                      <td style={{border:"solid 2px black",paddingBottom:"8px",paddingTop:"8px",width:"128px"}} className="border border-black py-2 text-center w-32">
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="flex justify-center items-center">
                          <span>{item.bookname}</span>
                          
                        </div>
                      </td>
                      <td style={{border:"solid 2px black",paddingBottom:"8px",paddingTop:"8px",width:"128px"}} className="border border-black py-2 text-center w-32">
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="flex justify-center items-center">
                          <span>{item.comment}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
    </div>
  )
}

export default Review