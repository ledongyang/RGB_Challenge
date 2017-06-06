var express = require("express"),
    app = express();

app.set("views","./views");
app.engine("html", require("ejs").renderFile);
app.use(express.static('./public'));

app.get("/", function(req, res){
   res.render("index.html"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server has started"); 
});