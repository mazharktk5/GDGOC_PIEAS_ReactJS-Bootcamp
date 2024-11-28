import React from "react";
import { books } from "./book.js";
import BookCard from "./BookCard";

const HighRateBooks = () => {
    const highRatedBooks = books.filter(book => book.rating > 4.5);

    return (
        <div>
            <h1>High Rated Books</h1>
            {highRatedBooks.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
};

export default HighRateBooks;
