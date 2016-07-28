var should = require('should'),
	sinon = require('sinon');


describe('Book Controller Tests', function(){
	describe('Post', function(){
		it('should not allow an empty title to Post', function(){
			var Book = function(){
				this.save = function(){}
			};
			var req = {
				body: {
					author: 'Veeresh Meesala'
				}
			};

			var res = {
				status: sinon.spy(),
				send: sinon.spy()
			};

			var bookController = require('../Controllers/bookController')(Book);
			bookController.post(req, res);

			res.status.calledwith(400).should.equal(true);
			res.send.calledwith('Title is required').should.equal(true);
		});
	});
});	