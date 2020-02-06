const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const htmlRoutes = require("./routes/html-routes");
app.use(htmlRoutes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});