const express = require('express');
const app = express();
const path = require('path');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


let port = 8080;

let posts = [
    {
        username: "Nikhil",
        content: "I have to workhard to achieve success"
    },
    {
        username: "Monu",
        content: "I have to make my life better"
    },
    {
        username: "Nikhil",
        content: "I have to make to myself satisfied"
    },
]

app.get('/', (req, res) => {
    res.send("server is working!!");
})

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts:posts})
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})