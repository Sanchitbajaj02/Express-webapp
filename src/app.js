const { log } = require("console");
const path = require('path');
const hbs = require('hbs');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname+'/../public');
const template_path = path.join(__dirname+'/../templates/views');
const partials_path = path.join(__dirname+'/../templates/partials');

// public path
app.set('view engine', 'hbs');
app.use(express.static(static_path));
app.set('views', template_path);
hbs.registerPartials(partials_path); 

// routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about"); 
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404error", {
        error: "Opps!, Page Not Found"
    });
});



app.listen(port, () => {
    console.log(`server is running at http://localhost:${3000}`);
})