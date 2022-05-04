const express=require('express');
const path=require('path');
const router=express.Router();
const rootDir=require('../utile/path');
router.get('/sehir',(req,res)=>{
res.render('sehir', {
    user:req.body
})
});
module.exports=router;