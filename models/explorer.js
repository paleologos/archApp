var mongoose= require("mongoose");


//Schema initializing

var explorerSchema= new mongoose.Schema({
      firstName: String,
      lastName: String,
      email: String,
      username: String,
      password: String
});

// Model compiling

module.exports= mongoose.model("Explorer", explorerSchema);