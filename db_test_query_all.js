// Query all items in the 'restaurants' collection

// define the variables to access the required modules as well as to initialize url to the MongoDB uri:
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

// To return all documents in the 'restaurant' collection, call the find method without a criteria document:
var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

// Call the findDocuments function
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurants(db, function() {
		db.close();
	});
});
