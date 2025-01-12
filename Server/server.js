const express =  require('express')
const app = express()
app.set("view engine", "ejs")
app.get('/',(req ,res,next)=>{
 
    res.render("index", {text1: "world",text:"poda Panni"})
   
 
})
const userRouter = require("./routes/users")
const postrouter = require("./routes/posts")
app.use('/users',userRouter)
app.use('/posts',postrouter)
app.listen(5000)