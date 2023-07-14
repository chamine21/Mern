const jokesController = require("../controllers/jokes.controller");
console.log("jokesController is =>", jokesController)

module.exports = (app) =>{
    // all jokes
    app.get("/api/jokes", jokesController.readAll); 
// create new jokes
    app.post("/api/jokes", jokesController.create);
//READ ONE
app.get("/api/jokes/:id",jokesController.findOneSingleJokes); 
// update
app.put("/api/jokes/:id", jokesController.update);

app.delete("/api/jokes/:id", jokesController.deleteAnExistingJokes);


} 