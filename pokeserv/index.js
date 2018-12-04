const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session"); 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'ssshhhhhh'}));

require("./routes/pokedex.js")(app);

app.listen(4242, () => {
  console.log("Listening on port 4242");
});