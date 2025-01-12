const express = require("express")
const router = express.Router()
router.get('/',(req,res)=>{
    res.json({message: "error"})

})

router.post('/',(req,res)=>{
    res.send("create user")
    
})
router.get('/:id', (req , res)=>{
    req.params.id
    res.send(`get user with id ${req.params.id}`)
})
router.get('/new',(req,res)=>{
    res.json({message : "error"})
})
module.exports = router