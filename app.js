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
     app.use(express.static(__dirname+"/node_modules/bootstrap/dist"));
     app.use(express.static(__dirname+"/node_modules/jquery/dist"));
     app.use(express.static(__dirname+"/node_modules/tether/dist"));

     app.get("/", function(req, res){
        res.render("index");
     });



     app.listen(port, process.env.IP, function(){
       console.log("SERVER STARTED AT PORT " +port);
     });
