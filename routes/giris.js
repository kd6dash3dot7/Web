const express=require('express');

const path=require('path');

const router=express.Router();

const rootDir=require('../utile/path');

let alert=require('alert');

router.get('/giris',(req,res)=>{

    res.render('giris');
});

router.post('/giris',(req,res)=>{
    const email=req.body.email;
    const sifre=req.body.sifre;
    function containsNumber(str) {
        return /[0-9]/.test(str);
      }
      function firstIsUppercase(str) {
        if (typeof str !== 'string' || str.length === 0) {
          return false;
        }
      
        if (str[0].toUpperCase() === str[0]) {
          return true;
        }
      
        return false;
      }
    if (email.split('@')[1] != 'sakarya.edu.tr' || !email) {
        console.log('Wrong E Mail.');
        res.redirect('/giris');
      }else if(!firstIsUppercase(sifre) || sifre.length  > 10 || !sifre){
        res.redirect('/giris');
        
      } else{
        console.log(`Hosgeldiniz ${email.split('@')[0]}`);
        alert(`Hosgeldiniz ${email.split('@')[0]}`);  
        res.redirect('/hakkimda');
      }
    
      
    console.log(email,sifre);

    
});


module.exports=router;
