const express=require ("express");
const app= express();
const path=require('path');
const girisRoute=require('./routes/giris');
const hakkimdaRoute=require('./routes/hakkimda');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extented: true}));
app.set('view engine', 'ejs');
app.set('views', 'public');


app.use(girisRoute);
app.use(hakkimdaRoute);

app.listen(3000);



