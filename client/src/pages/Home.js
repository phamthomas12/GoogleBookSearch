import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Wrapper from "../components/Wrapper";
import BookCard from "../components/BookCard";
import API from "../utils/API";



const Home = () => {
    const [dataSearch, setDataSearch] = useState({
        books: [],
        searchedBook: "",
        savedBooks: []
        

    });


    const handleSearchChange = event => {
        const { name, value } = event.target;
        setDataSearch({
            ...dataSearch,
            [name]: value
        })

    }


    const handleSubmit = event => {
        API.getBook(dataSearch.searchedBook)
            .then(response => {
                setDataSearch({
                    ...dataSearch,
                    books: response.data.items
                })
            })
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            API.getBook(dataSearch.searchedBook)
            .then(response => {
                setDataSearch({
                    ...dataSearch,
                    books: response.data.items
                })
            })
        }
    }



    const handleSavedBook = (book) => {

         const newBook = {
            "title": book.volumeInfo.title,
            "authors": book.volumeInfo.authors.join(","),
            "description": book.volumeInfo.description,
            "image": book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg",
            "link": book.volumeInfo.infoLink
        }
        API.saveBook(newBook)
        .then(response => console.log(response))
        
        
            
            .catch(err => console.log(err))
            alert("Your book has been saved!")
    }
  


    return (
        <Wrapper>
            <SearchBar handleSubmit={handleSubmit} handleInputChange={handleSearchChange} search={dataSearch.searchedBook} handleKeyPress={handleKeyPress} />
            {dataSearch.books.length > 0 ? dataSearch.books.map(book => {
                return (
                    <BookCard book={book} handleSavedBook={handleSavedBook} />
                )
            }) : ""}
           
        </Wrapper>
    )

}

export default Home;