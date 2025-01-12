const express = require("express")
const router = express.Router()
router.get('/',(req,res)=>{
    res.json({message: "error"})

})
router.get('/new',(req,res)=>{
    res.json({message : "error"})
})
module.exports = router