// imports joke schema over from models folder
const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "didn't quite work out there bud", error: err}));
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "didn't quite work out there bud hehe", error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne(req.body)
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "didn't quite work out there bud hehe", error: err}));
}

// ask how to update a joke cause that is really confusing to me 

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteJoke(req.body)
        .then(deletedJoke => res.json({joke: deletedJoke}))
        .catch(err => res.json({message: "didn't quite work out there bud hehe", error: err}));
}