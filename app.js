var express = require('express');
var app = express();
var path =require('path');
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/Images'));
app.get('/', function(req,res){
    res.sendFile( path.join(__dirname +  '/index.html' ));

});
app.get('/#about', function(req, res) {

       res.sendFile(path.join(__dirname + '/index.html'));
    
    });
    
    app.get('/#menu', function(req, res) {
    
       res.sendFile(path.join(__dirname + '/index.html'));
    
    });
    app.get('/#partner', function(req, res) {
    
           res.sendFile(path.join(__dirname + '/index.html'));
        
        });
    
    app.get('/#contact', function(req, res) {
    
       res.sendFile(path.join(__dirname + '/index.html'));
    
    });





app.listen(7000);
