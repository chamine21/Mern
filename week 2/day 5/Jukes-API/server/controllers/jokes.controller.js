// the controller does CRUD 
// import the model here

const Jokes = require("../models/jokes.model")
console.log(Jokes);

// READ ALL
module.exports.readAll = (req, res) => {
    Jokes.find()
    .then((allJokes) =>{
        res.json(allJokes)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    })
}

// CREATE
module.exports.create = (req, res) => {
    Jokes.create(req.body)
    .then((newlyCreatedJokes)=>{
        res.json({Jokes: newlyCreatedJokes})
    })
    .catch((err)=>{
        res.json({ message: "Something went wrong", error: err });
    });
};

//READ ONE
module.exports.findOneSingleJokes = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneSingleJokes => {
            res.json({ Jokes: oneSingleJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

        module.exports.update = (req, res) =>{
            Jokes.findOneAndUpdate({_id: req.params.id}, req.body,
            {new: true, runValidators: true})
            .then((updatedJokes)=>{
                res.json({Jokes: updatedJokes})
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });

        }

        // DELETE
module.exports.deleteAnExistingJokes = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        }); }