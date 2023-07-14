const express = require("express");
const app = express();
const port = 8000;

// MIDDLEWARE ==============
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//============================
// Require / import the file

require("./config/mongoose.config")


 require("./routes/jokes.routes")(app)



app.listen( port, () => console.log(`Listening on port: ${port} 🚀`) );