const express=require ("express");
const app= express();
const path=require('path');
const port= process.env.PORT || 5000;
const girisRoute=require('./routes/giris');
const hakkimdaRoute=require('./routes/hakkimda');
const sehirRoute=require('./routes/sehir');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extented: true}));
app.set('view engine', 'ejs');
app.set('views', 'public');


app.use(girisRoute);
app.use(hakkimdaRoute);
app.use(sehirRoute);

app.listen(3000);



