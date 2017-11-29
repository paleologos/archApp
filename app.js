var  express= require("express"),
     bodyParser= require("body-parser"),
     methodOverride= require("method-override"),


     port= process.env.PORT || 3000,
     app= express();

     //configuration
     app.set("view engine", "ejs");
     app.use(methodOverride("_method"));
     app.use(bodyParser.urlencoded({extended:true}));
     app.use(express.static(__dirname+"/public"));

     app.get("/", function(req, res){
        res.send("Initial route working");
     });



     app.listen(port, process.env.IP, function(){
       console.log("SERVER STARTED AT PORT " +port);
     });
