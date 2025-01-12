const express = require("express")
const router = express.Router()

router.use(logger)
router.get('/',(req,res)=>{
    res.send("users")

})
router.post('/',(req,res)=>{
    res.send("create user")
    
})


router.get('/new',(req,res)=>{
    res.json({message : "error"})
})


router.route("/:id").get((req , res)=>{
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