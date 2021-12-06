const path = require ('path');
const express = require ('express');
const app = express ();

app.use (express.static(__dirname + 'dist/FrontEnd'));

app.get('/*', function(req,res){
    res.sendFile (path.join(_dirname,'.\src\app\core\components\private\product\product-list\product-list.component.html'));
}); 

app.listen (process.env.PORT || 5000);