import React from 'react'
import { Link } from 'react-router-dom'

export default function Subject() {

  return (
    <div style={{ padding: "23px", color: "white", minHeight: "80vh", fontFamily: "monospace" }}>
      <h1 style={{ textAlign: "center", fontSize: "40px", textTransform: "uppercase" }}>Subjects</h1>
      <br />
      <div 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#2a255a",
          flexWrap: "wrap",
        }} 
        className="boxes"
      >
        <div 
          style={{
            backgroundColor: "rgba(255, 250, 250, 0.5)",
            marginLeft: "40px",
            border: "solid 2px white",
            height: "260px",
            width: "20%",
            minWidth: "220px",
            borderRadius: "12px",
            boxShadow: "1px 1px 30px white",
            marginBottom: "20px",
            textAlign: "center",
          }} 
          className="box1"
        >
          <h3 style={{ fontSize: "25px", textDecoration: "underline" }}>Core Subjects</h3>
          <ul style={{ padding: "0", listStyle: "none" }}>
            <li style={{ fontSize: "18px", marginBottom: "6px" }}>
              <Link 
                style={{
                  color: "#2a255a",
                  textDecoration: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                }} 
                to="/home//physics"
              >
                Physics
              </Link>
            </li>
            <li style={{ fontSize: "18px", marginBottom: "6px" }}>
              <Link 
                style={{
                  color: "#2a255a",
                  textDecoration: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                }} 
                to="/home//chemistry"
              >
                Chemistry
              </Link>
            </li>
            <li style={{ fontSize: "18px", marginBottom: "6px" }}>
              <Link 
                style={{
                  color: "#2a255a",
                  textDecoration: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                }} 
                to="/home//mechanics"
              >
                Mechanics
              </Link>
            </li>
          </ul>
        </div>

        <div 
          style={{
            backgroundColor: "rgba(255, 250, 250, 0.5)",
            marginLeft: "40px",
            border: "solid 2px white",
            height: "260px",
            width: "20%",
            minWidth: "220px",
            borderRadius: "12px",
            boxShadow: "1px 1px 30px white",
            marginBottom: "20px",
            textAlign: "center",
          }} 
          className="box2"
        >
          <h3 style={{ fontSize: "25px", textDecoration: "underline" }}>Programming Languages</h3>
          <ul style={{ padding: "0", listStyle: "none" }}>
            <li style={{ fontSize: "18px", marginBottom: "6px" }}>
              <Link 
                style={{
                  color: "#2a255a",
                  textDecoration: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                }} 
                to="/home//python"
              >
                Python
              </Link>
            </li>
            <li style={{ fontSize: "18px", marginBottom: "6px" }}>
              <Link 
                style={{
                  color: "#2a255a",
                  textDecoration: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                }} 
                to="/home//cplusplus"
              >
                C++
              </Link>
            </li>
            <li style={{ fontSize: "18px", marginBottom: "6px" }}>
              <Link 
                style={{
                  color: "#2a255a",
                  textDecoration: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                }} 
                to="/Morebooks//Java"
              >
                Java
              </Link>
            </li>
            <li style={{ fontSize: "18px", marginBottom: "6px" }}>
              <Link 
                style={{
                  color: "#2a255a",
                  textDecoration: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                }} 
                to="/Morebooks//Ruby"
              >
                Ruby
              </Link>
            </li>
            <li style={{ fontSize: "18px", marginBottom: "6px" }}>
              <Link 
                style={{
                  color: "#2a255a",
                  textDecoration: "none",
                  fontWeight: "700",
                  cursor: "pointer",
                }} 
                to="/Morebooks//Rust"
              >
                Rust
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .box1, .box2 {
              width: 45%;
              margin-left: 10px;
            }
            h1 {
              font-size: 30px;
            }
            h3 {
              font-size: 22px;
            }
            li {
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .box1, .box2 {
              width: 90%;
              margin-left: 5px;
            }
            h1 {
              font-size: 25px;
            }
            h3 {
              font-size: 20px;
            }
            li {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
}