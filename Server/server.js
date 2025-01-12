const express =  require('express')
const app = express()
app.set("view engine", "ejs")
app.use(express.static( "public"))
const userRouter = require("./routes/users")
const postrouter = require("./routes/posts")
app.use('/users',userRouter)
app.use('/posts',postrouter)


app.listen(5000)