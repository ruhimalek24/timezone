const express = require('express');
const mysql = require('mysql');


const port = 8009;

var app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res) =>{
    res.render('display');
});

app.post('/submit',(req,res) =>{    
    var timez = req.body.timezone;    

    let date = new Date();        

    let result = date.toLocaleString("en-US",{
            timeZone : timez
        });
        
    console.log(timez);
    res.render('data',{result : result , timez : timez});
    console.log(date);
    console.log(result);
});

app.listen(port, () => {
    console.log('SERVER LISTENES');
});