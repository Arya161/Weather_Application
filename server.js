const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.send('Works Fine')
}).listen(3000, function(){
    console.log('Sample listening on port 3000')
})

