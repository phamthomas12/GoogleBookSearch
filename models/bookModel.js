const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true
       
    },

    authors: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true

    },

    image: {
        type: String
    },

    link: {
        type: String
    }

})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;