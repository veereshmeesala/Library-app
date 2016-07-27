var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express(),
	port = process.env.PORT || 3000,
	bookRouter = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());	

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

bookRouter.route('/books')
		  .post(function(req, res){
		  	var book = new Book(req.body);
		  	// console.log(book);
		  	book.save();
		  	res.status(201).send(book);
		  })
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