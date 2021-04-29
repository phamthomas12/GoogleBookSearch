import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import "../styles/BookCard.css";


const BookCard = ({book, handleSavedBook}) => {
    return (
        <Container fluid>
        <Card>

            <Card.Body>
                <Row>
                    <Col sm="2">
                       {}
                        <Card.Img style={{width: "15%"}} className="" variant="top" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"} />
                    </Col>
                    <Col sm="10">
                        
                        <div className="book-buttons">
                        <Button href={book.volumeInfo.infoLink} target="_blank">View</Button>
                        <Button onClick={() => handleSavedBook(book)}>Save</Button>
                        </div>
                        <Card.Title>{book.volumeInfo.title}</Card.Title>
                        <Card.Text>{book.volumeInfo.authors}</Card.Text>
                        <Card.Text>
                            {book.volumeInfo.description}
                       </Card.Text>
                    </Col>
                </Row>



            </Card.Body>
        </Card>
       

        </Container>
    )
}

export default BookCard;