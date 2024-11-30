import React, { useContext } from "react";
import { BookContext } from "./BookContext";

const BookCard = ({ title, author, rating, genre }) => {
    const { setBorrowedBooks, setFavBooks } = useContext(BookContext);

    const handleAddToBorrowed = () => {
        setBorrowedBooks(prev => [...prev, title]);
    };

    const handleAddToFavorite = () => {
        setFavBooks(prev => [...prev, title]);
    };

    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px", borderRadius: "5px" }}>
            <h2>{title}</h2>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Rating:</strong> {rating}</p>
            <p><strong>Genre:</strong> {genre}</p>
            <button onClick={handleAddToBorrowed}>Add Me</button>
            <button onClick={handleAddToFavorite}>Favorite</button>
        </div>
    );
};

export default BookCard;
