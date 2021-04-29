import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks";


const Saved = () => {
    // Setting initial state
    const [book, setBook] = useState([]);


    // Load all saved books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Load all saved books and set them to books
    const loadBooks = () => {
        API.getSavedBooks()
            .then(response => {
                console.log(response.data)
                setBook(response.data)
            }
               
            )
            .catch(err => console.log(err));
    };

    

    // Removes a book from the database with a give id, then reloads books from db
    const removeBook = id => {
        API.deleteBook(id)
            .then(response => loadBooks())
            .catch(err => console.log(err));

    }


    return (
        <Wrapper>
              
            { book.length > 0 ?   book.map(book => {
             
                return (
                    <SavedBooks book={book} removeBook={removeBook} />
                )
            }) : ""} 
           
        </Wrapper>
    )
}

export default Saved;