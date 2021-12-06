const path = require ('path');
const express = require ('express');
const app = express ();

app.use (express.static(__dirname + '/dist/FrontEnd'));

app.get('/*', function(req,res){
    res.sendFile (path.join(_dirname,'/dist/FrontEnd/index.html'));
}); 

app.listen (process.env.PORT || 5000);