var mongoose= require("mongoose");


//Schema initializing

var siteSchema= new mongoose.Schema({
      siteName: String,
      siteCountry: String,
      siteRegion: String,
      siteCity: String,
      siteDescription: String,
      siteSearchTags=[],//it will be array
      siteImage: String,
      siteGeoLocLat: String,
      siteGeoLocLon:String,
      siteGeoLocShape: String,// connected to the geopoint.js
      siteExplorer: String// connected to the explorer.js
});

// Model compiling

module.exports= mongoose.model("Site", siteSchema);