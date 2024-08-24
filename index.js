const express = require('express');
const app = express();
const path = require('path');
const {v4:uuidv4} = require('uuid');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


let port = 8080;

let posts = [
    {
        id:uuidv4(),
        username: "Nikhil",
        content: "I have to workhard to achieve success"
    },
    {
        id:uuidv4(),
        username: "Monu",
        content: "I have to make my life better"
    },
    {
        id:uuidv4(),
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

app.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
})

app.post('/posts',(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect('/posts');
})

app.get('/posts/:id',(req,res)=>{
    let {id} = req.params;
    let post = posts.find(p=>id===p.id);
    // console.log(post);
    res.render('show.ejs',{post});
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})