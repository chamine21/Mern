// jokes.model.js

const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  
    
   punchline:{
     type: String},

   setup:{
     type: String},
    
    
    

}, {timestamps: true});

const Jokes = mongoose.model('Joke', JokeSchema);
module.exports = Jokes;
