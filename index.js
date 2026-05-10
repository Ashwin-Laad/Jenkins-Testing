const express=require('express');
const app=express();
const PORT=3000;
app.get("/",(req,res,next)=>{
  res.send("<h1>Hello from the express container</h1>");
})

app.use("/",(req,res,next)=>{
  res.send("<h1>Go to the get page</h1>")
})

app.listen(PORT,()=>{
  console.log("Server running on port"+PORT);
})