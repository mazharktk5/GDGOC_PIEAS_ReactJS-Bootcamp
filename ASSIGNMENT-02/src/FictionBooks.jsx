import React from "react";
import { books } from "./book.js";
import BookCard from "./BookCard.jsx";

const FictionBooks = () => {
    const fictionBooks = books.filter(book => book.genre === "fiction");

    return (
        <div>
            <h1>Fiction Books</h1>
            {fictionBooks.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
};

export default FictionBooks;
