/* Fill out these functions using Mongoose queries*/
var findLibraryWest = function() {
	Listing.findOne({ name: 'Library West' }, function(err, listing) {
	   if (err) throw err;
	   console.log(listing);
	});
};
var removeCable = function() {
  	Listing.findOne({ code: 'CABL' }, function(err, listing) {
	   if (err) throw err;
	   if (listing!==null){
		console.log(listing);
	   	listing.remove(function(err) {
			if (err) throw err;
	  	 });
	   }
	   else{
		console.log('Already removed!');
	   }
	});
};
var updatePhelpsMemorial = function() {
	Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '100 Phelps Lab, P.O. Box 116350 Gainesville, FL  32611' }, {new: true}, function(err, listing){
	   if (err) throw err;
	   console.log(listing);
	});
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, listings) {
	   if (err) throw err;
	   console.log(listings);
  });
};
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');
mongoose.connect(config.db.uri);
updatePhelpsMemorial();
removeCable();
findLibraryWest();
