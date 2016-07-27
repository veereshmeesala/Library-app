var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express(),
	port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());	

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

bookRouter = require('./Routes/bookRoutes')(Book);


app.use('/api/books', bookRouter);

app.get('/', function(req, res){
	res.send('Welcome to my API');
});

app.listen(port, function(){
	console.log('Gulp is Running my app on PORT ' + port);
});