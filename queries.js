/* Fill out these functions using Mongoose queries*/
var findLibraryWest = function() {
	Listing.find({ name: 'Library West' }, function(err, listing) {
	   if (err) throw err;
	   console.log(listing);
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
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
