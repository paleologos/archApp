var  express= require("express"),
     bodyParser= require("body-parser"),
     methodOverride= require("method-override"),

     coords=[],
     position={},



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


     //routes
     //landing page
     app.get("/", function(req, res){
        res.render("index");
     });

     //add new site
     app.get("/sites/new", function(req, res){
        res.render("newsite");
     });

     app.post("/", function(req, res){
        var lat= req.body.latitude;
        var long=req.body.longitude;
        position.lat=lat;
        position.long=long;
        coords.push(position);
        console.log("Your location is :"+ lat+"  "+ long);
        coords.forEach(function(flag){
          console.log(flag);
        })
        res.redirect("/");
     });



     app.listen(port, process.env.IP, function(){
       console.log("SERVER STARTED AT PORT " +port);
     });
