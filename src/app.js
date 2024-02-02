const express = require("express");
const app = express();
const port = process.env.PORT || 8000 ;
const path = require("path");
const hbs = require("hbs");
//public statc path
const static_Path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");




//app.set for hbs
 app.set("view engine", "hbs");

//hbs path not a views this is templates
app.set('views', template_path);  
//we need to register hbs path
hbs.registerPartials(partials_Path)
//app.use 
app.use(express.static(static_Path));

//routing
app.get("/", (req, res)=>{
    res.render("index")
});
app.get("/about", (req, res)=>{
    res.render("about")
});

app.get("/weather", (req, res)=>{
    res.render("weather")
});
app.get("*", (req, res)=>{
    res.render("404err",{
        errorMsg: 'opps!!!! Page Not Found'
    })
});

app.listen(port, ()=>{
    console.log(`welcome to the litning ${port} port`)
})