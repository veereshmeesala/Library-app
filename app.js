var express = require('express'),
	mongoose = require('mongoose'),
	app = express(),
	port = process.env.PORT || 3000,
	bookRouter = express.Router();

// var db = mongoose.connect('mongodb://localhost/bookAPI');
// var Book = require('./models/bookModel');

bookRouter.route('/books')
		  .get(function(req, res){
		  		var responseJson = {hello: "this is my api"};
		  		res.json(responseJson);
		  		// Book.find(function(err, books){
		  		// 	if(err)
		  		// 		console.log('error ' + err);
		  		// 	else
		  		// 		res.json(books);
		  		// })
			});

app.use('/api', bookRouter);

app.get('/', function(req, res){
	res.send('Welcome to my API');
});

app.listen(port, function(){
	console.log('Gulp is Running my app on PORT ' + port);
});