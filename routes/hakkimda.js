const express=require('express');
const path=require('path');
const router=express.Router();
const rootDir=require('../utile/path');
router.get('/hakkimda',(req,res)=>{
res.render('hakkimda', {
    user:req.body
})
});
module.exports=router;