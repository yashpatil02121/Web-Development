const express = require("express")
const path = require("path");

const app = express();
const port = 80;

app.use('/static',express.static('static'))

//set the template engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views',path.join(__dirname,'views'))

//our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title: 'hey Harry', message: 'Hello there and thanks for pug'})
});


app.get("/",(req,res)=>{
    res.status(200).send("This is my first express app with Harry")
});

app.get("/about",(req,res)=>{
    res.send("This is about page of my express app with Harry")
});

app.get("/this",(req,res)=>{
    res.status(404).send("This page is not found")
});

app.post("/about",(req,res)=>{
    res.send("This is post about page of my express app with Harry")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})