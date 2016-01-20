/* Fill out these functions using Mongoose queries*/
var findLibraryWest = function() {
	Listing.find({ name: 'Library West' }, function(err, listing) {
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
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
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
    config = require('./config.js'),
    listingData= require('./Listings.json');
mongoose.connect(config.db.uri);
findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
