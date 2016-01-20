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
	   console.log(listing);
	   listing.remove(function(err) {
		if (err) throw err;
	   });
	});
};
var updatePhelpsMemorial = function() {
	Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '100 Phelps Lab, P.O. Box 116350 Gainesville, FL  32611' }, function(err, listing) {
	   if (err) throw err;
	});
	Listing.findOne({ name: 'Phelps Laboratory' }, function(err, listing) {
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
findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
