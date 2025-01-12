const e = require("express")
const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/",(req,res)=>{
    console.log(req.query.name )
    res.send("userlist")
})

router.get('/new',(req,res)=>{
    res.render("users/new",{firstname :" "})
})
router.post('/',(req,res)=>{
    const isvalid = false   
    if(isvalid){
        users.push({firstname : req.body.firstname})
        res.redirect(`users/${users.length -1 }`)
    }
    else{
        console.log("Error")
        res.render("users/new")
    }
    console.log(req.body.firstname)
    res.send("hi")
})


router.route("/:id").get((req , res)=>{
    console.log(req.user)
    console.log(req.user)
    req.params.id
    res.send(`get user with id ${req.params.id}`)
}).put( (req , res)=>{
    req.params.id
    res.send(`get user with id ${req.params.id}`)
}).delete( (req , res)=>{
    req.params.id
    res.send(`delete user with id ${req.params.id}`)
})

const users= [{name: "Santhosh"},{name : "teddyy"}]
router.param("id",(req,res,next,id)=>{
    console.log(id)
    req.user = users[id]
    next()
})
function logger(req,res ,next){
    console.log(req.originalUrl)
        next() 
    
} 

module.exports = router