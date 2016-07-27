var express = require('express'),
	mongoose = require('mongoose'),
	app = express(),
	port = process.env.PORT || 3000,
	bookRouter = express.Router();

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

bookRouter.route('/books')
		  .get(function(req, res){
		  		var query = {};
		  		if(req.query.genre){
		  			query.genre = req.query.genre;
		  		}
		  		// var query = req.query;
		  		Book.find(query, function(err, books){
		  			if(err)
		  				res.status(500).send(err);
		  			else
		  				res.json(books);
		  		})
			});

bookRouter.route('/books/:bookId')
			.get(function(req, res){
				Book.findById(req.params.bookId, function(err, book){
					if(err)
						res.status(500).send(err);
					else
						res.json(book);
				});
			});

app.use('/api', bookRouter);

app.get('/', function(req, res){
	res.send('Welcome to my API');
});

app.listen(port, function(){
	console.log('Gulp is Running my app on PORT ' + port);
});