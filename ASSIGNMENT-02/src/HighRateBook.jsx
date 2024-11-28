import React from "react";
import { books } from "./book.js";
import BookCard from "./BookCard";

const HighRateBooks = () => {
    const highRatedBooks = books.filter(book => book.rating > 4.5);

    return (
        <>
        <h1>High Rated Books</h1>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "space-between",
            // gap: "1rem"  // adjust this value as needed to adjust the spacing between books in the grid
        }}>
            {highRatedBooks.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
        </>
    );
};

export default HighRateBooks;
