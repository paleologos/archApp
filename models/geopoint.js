var mongoose= require("mongoose");


//Schema initializing

var geopointSchema= new mongoose.Schema({
      pointLat: String,
      pointLon: String,
      pointImage: String,
      pointDescription: String
});

// Model compiling

module.exports= mongoose.model("Geopoint", geopointSchema);