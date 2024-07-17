

import React from 'react';
//import './App.css';
//import Books from './components/Books';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Subject from './components/Subject';
import Signup from './components/Signup';
//import {Python} from './components/Python';
//import {Cplusplus} from './components/Cplusplus';
//import {Mechanics} from './components/Mechanics';
//import {Physics} from './components/Physics';
//import {Chemistry} from './components/Chemistry';
import Login from './components/Login';
import library from './components/library.jpg';
import Review from './components/Review';
import { Test } from './components/Test';
import Viewmore from './components/Viewmore';
//import {Java} from './components/Java';
//import { Ruby } from './components/Ruby';
//import {Rust} from './components/Rust';
import {Book} from './components/Book';

function App() {
  //const[show,setShow]=useState(false)

  
    
  

  return (
    <div style={{backgroundImage:`url(${library})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(80%)",overflow:"hidden",padding:"16px"}}>
  
    <Router>
    <Navbar />
      <Routes>
        <Route path='/review' element={<Review/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Morebooks" element={<Test subjects={["java","ruby","rust"]} links={["Java","Ruby","Rust"]} />} />
        <Route exact path="/" element={<Signup/>}></Route>
        <Route path="/home" element={<><Test subjects={["physics", "chemistry", "cplusplus", "python", "mechanics"]} links = {["physics", "chemistry", "cplusplus", "python", "mechanics"]}  /><Viewmore /></>} />
        <Route exact path="/subject" element={<Subject/>}></Route>
        <Route path="/home//Physics" element={<><Book link="physics" subject="Physics"/></>} />
          <Route path="/home//Chemistry" element={<><Book link="chemistry" subject="Chemistry" /></>} />
          <Route path="/home//Cplusplus" element={<><Book link="cplusplus" subject="C++"/></>} />
          <Route path="/home//Python" element={<><Book link="python" subject="Python"/></>} />
          <Route path="/home//Mechanics" element={<><Book link="mechanics" subject="Mechanics" /></>} />
          <Route path="/Morebooks//Java" element={<><Book link="java" subject="Java"/></>} />
          <Route path="/Morebooks//Ruby" element={<><Book link="ruby" subject="Ruby"/></>} />
          <Route path="/Morebooks//Rust" element={<><Book link="rust" subject="Rust"/></>} />
        
      </Routes>
      <Footer/>

    </Router>
    
    </div>
  );
}

export default App;

