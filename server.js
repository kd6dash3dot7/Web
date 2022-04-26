const express=require ("express");
const app= express();
app.use(express.static("public"));
app.use(express.urlencoded({extented: true}));
app.post("/giris.html", (req,res) =>{ 
    
    
});
app.listen(3000);
