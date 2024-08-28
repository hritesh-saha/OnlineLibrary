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
    <div style={{ minHeight: "80vh", fontFamily: "monospace", padding: "16px" }}>
      <h1 style={{ textAlign: "center", color: "white", fontWeight: "bold", paddingBottom: "12px", fontSize: "30px" }}>Reviews</h1>
      
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px" }}>
        <div style={{display:"flex",flexDirection:"row",gap:"26px"}}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <label style={{ fontWeight: "800", color: "white", fontSize: "20px" }} htmlFor="username">Username</label>
          <input value={form.username} name='username' style={{ fontSize: "18px", width: "100%", maxWidth: "400px", borderRadius: "12px", height: "25px", border: "solid 3px #2a255a", fontFamily: "monospace", padding: "5px" }} type="text" onChange={handleChange} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <label style={{ fontWeight: "800", color: "white", fontSize: "20px" }} htmlFor="Bookname">Book Name</label>
          <input value={form.bookname} name='bookname' style={{ fontSize: "18px", width: "100%", maxWidth: "400px", borderRadius: "12px", height: "25px", border: "solid 3px #2a255a", fontFamily: "monospace", padding: "5px" }} type="text" onChange={handleChange} />
        </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <label style={{ fontWeight: "800", color: "white", fontSize: "20px" }} htmlFor="comment">Comments:</label>
          <input value={form.comment} name='comment' style={{ width: "100%", maxWidth: "600px", fontSize: "18px", height: "30px", borderRadius: "12px", border: "solid 3px #2a255a", fontFamily: "monospace", padding: "5px" }} onChange={handleChange} />
        </div>

        <div style={{ display: "flex", justifyContent: "center", paddingTop: "16px" }}>
          <button style={{ padding: "10px 20px", borderRadius: "16px", height: "40px", color: "#2a255a", cursor: "pointer", backgroundColor: "#89CFF0", fontWeight: "700" }} type='submit' onClick={saveReview}>Post Review</button>
        </div>
      </div>
      
      <div style={{ marginTop: "40px", color: "black", fontWeight: "800" }}>
        <h3 style={{ color: "white", fontSize: "25px", marginLeft: "20px" }}>Current Reviews</h3>
        {review.length === 0 && <div>No Reviews to Show</div>}
        {review.length !== 0 && (
          <table style={{ width: "100%", borderRadius: "20px", overflow: "hidden", marginTop: "20px" }}>
            <thead style={{ backgroundColor: "#2a255a", color: "#ffffff", fontSize: "19px", fontFamily: "monospace" }}>
              <tr>
                <th style={{ paddingBottom: "8px", paddingTop: "8px" }}>Username</th>
                <th style={{ paddingBottom: "8px", paddingTop: "8px" }}>Bookname</th>
                <th style={{ paddingBottom: "8px", paddingTop: "8px" }}>Comments</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#7CB9E8", fontSize: "18px" }}>
              {review.map((item) => (
                <tr key={item.id}>
                  <td style={{ paddingBottom: "8px", paddingTop: "8px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center" }}>{item.username}</td>
                  <td style={{ paddingBottom: "8px", paddingTop: "8px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center" }}>{item.bookname}</td>
                  <td style={{ paddingBottom: "8px", paddingTop: "8px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center" }}>{item.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Review;