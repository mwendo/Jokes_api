const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Establisheda connection to the database"))
    .catch(err => console.log("beep boop bop, db connection was a flop", err));