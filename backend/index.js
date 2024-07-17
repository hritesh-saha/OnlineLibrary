require('dotenv').config();
const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
//mongoose.connect("mongodb://localhost:27017/onlinelibrary");
const db_url=process.env.DB_URI;
mongoose.connect(db_url);
const bcrypt=require("bcryptjs");
//const {body, validationResult}=require("express-validator");
const jwt=require("jsonwebtoken");
const { configDotenv } = require('dotenv');
configDotenv();

const JWT_SECRET=process.env.JWT_SECRET;

const db=mongoose.connection
db.once('open',()=>{
    console.log("Mongodb Connection Successful")
})

const port=process.env.PORT;

app.use(bodyParser.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}));

const userSchema2=new mongoose.Schema({
    title:String,
    authors:Array,
    image:String,
    subject:String
})

const tests=mongoose.model("tests",userSchema2)

const userSchema=new mongoose.Schema({
    username:{type:String,
        required:true,
    },
    bookname:{type:String,
        required:true,
        unique:true
    },
    comment:{type:String,
        required:true
    }
})

const review=mongoose.model("review",userSchema)
//review.createIndexes();

const userSchema3=new mongoose.Schema({
    username:{type:String,
        required:true,
    },
    email:{type:String,
        required:true,
        unique:true
    },
    password:{type:String,
        required:true
    }
})

const Users=mongoose.model("data",userSchema3);
//Users.createIndexes();

app.get("/review",async function(req,res){
    const reviews=await review.find({});
    res.json(reviews);
})

app.post("/review",
    async(req,res)=>{
        try{
            const newReview = new review({
                username: req.body.username,
                bookname: req.body.bookname,
                comment: req.body.comment
            });
            await newReview.save();
            console.log('Comment registered:', newReview);
        }
        catch (err) {
            console.error('Error saving user:', err.message);
            res.status(500).send('Not Happening');
        }
    }
)

app.post("/signup",
    //  [
   //   body('email').isEmail().normalizeEmail(),
   //   body('password').isLength({ min:3 }),
  //],
   async (req, res) => {
      console.log(req.body)
      //const errors = validationResult(req);
      //if (!errors.isEmpty()) {
      //    return res.status(400).json({ errors: errors.array() });
      //}
  
      try {
          //Check whether the user already exists
          let user = await Users.findOne({ email: req.body.email });
          if (user) {
              return res.status(400).json({ error: "Sorry...Email already exists" });
              }
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
          const newUser = new Users({
              username: req.body.username,
              email: req.body.email,
              password: hashedPassword
          });
  
          await newUser.save();
          const data={
              user:{
                  id: newUser.id
              }
          }
  
          const authtoken=jwt.sign(data,JWT_SECRET);
          res.json({authtoken})
  
          console.log('User registered:', newUser);
      } catch (err) {
          console.error('Error saving user:', err.message);
          res.status(500).send('Not Happening');
      }
  });
  
  app.post("/login",
     // [
   //   body('email','Enter a valid email').isEmail().normalizeEmail(),
   //   body('password','Password cannot be blank').exists()
  //],
  async (req, res) => {
      //const errors = validationResult(req);
      //if (!errors.isEmpty()) {
      //    return res.status(400).json({ errors: errors.array() });
      //}
      const {email,password}=req.body;
      try{
          let user=await Users.findOne({email});
          if(!user){
              return res.status(400).json({error:"Please try to login with correct credentials"})
          }
          const passwordCompare=await bcrypt.compare(password,user.password);
          if(!passwordCompare){
              return res.status(400).json({error:"Please try to login with correct credentials"})
                  }
          const   data={
              user:{
                  id: user.id
              }
          }
  
          const authtoken=jwt.sign(data,JWT_SECRET);
          res.json({authtoken})
      }catch (err) {
          console.error('Error saving user:', err.message);
          res.status(500).send('Server Error');
      }
  
  })

app.get("/",async function(req,res){
    const books=await tests.find({});
    res.send(
        {
        books
    }
    );
})
app.get("/physics",async function(req,res){
    const books=await tests.find({subject:"Physics"});
    res.send(
        {
        books
    }
    );
})
app.get("/chemistry",async function(req,res){
    const books=await tests.find({subject:"Chemistry"});
    res.send(
        {
        books
    }
    );
})
app.get("/cplusplus",async function(req,res){
    const books=await tests.find({subject:"C++"});
    res.send(
        {
        books
    }
    );
})
app.get("/python",async function(req,res){
    const books=await tests.find({subject:"Python"});
    res.send(
        {
        books
    }
    );
})

app.get("/mechanics",async function(req,res){
    const books=await tests.find({subject:"Mechanics"});
    res.send(
        {
        books
    }
    );
})

app.get("/java",async function(req,res){
    const books=await tests.find({subject:"Java"});
    res.send(
        {
        books
    }
    );
})
app.get("/ruby",async function(req,res){
    const books=await tests.find({subject:"Ruby"});
    res.send(
        {
        books
    }
    );
})
app.get("/rust",async function(req,res){
    const books=await tests.find({subject:"Rust"});
    res.send(
        {
        books
    }
    );
})


app.post("/post",async function(req,res){
    await tests.insertMany(

        [{
            title:"absd",
            authors:["avirup","hritesh"],
            image:"asg",
            subject:"CS"
        }]
    )
    res.json({
        "message":"Success!"
    })
    
})
app.post("/postphysics",async function(req,res){
    await tests.insertMany(

        [{
            title:"",
            authors:["avirup","hritesh"],
            image:"asg",
            subject:"Physics"
        }]
    )
    res.json({
        "message":"Success!"
    })
    
})
app.post("/postchemistry",async function(req,res){
    await tests.insertMany(

        [{
            title:"",
            authors:["avirup","hritesh"],
            image:"asg",
            subject:"Chemistry"
        }]
    )
    res.json({
        "message":"Success!"
    })
    
})
app.post("/postcplusplus",async function(req,res){
    await tests.insertMany(

        [{
            title:"",
            authors:["avirup","hritesh"],
            image:"asg",
            subject:"C++"
        }]
    )
    res.json({
        "message":"Success!"
    })
    
})
app.post("/postpython",async function(req,res){
    await tests.insertMany(

        [{
            title:"",
            authors:["avirup","hritesh"],
            image:"asg",
            subject:"Python"
        }]
    )
    res.json({
        "message":"Success!"
    })
    
})
app.post("/postmechanics",async function(req,res){
    await tests.insertMany(

        [{
            title:"",
            authors:["avirup","hritesh"],
            image:"asg",
            subject:"Mechanics"
        }]
    )
    res.json({
        "message":"Success!"
    })
    
})


app.listen(port,()=>{console.log(`Server has Started at port ${port}`)});