import React from "react";
import { books } from "./book.js";

import BookCard from "./BookCard";

const BookDetails = () => {
    return (
        <div>
            <h1>All Book Details</h1>
            {books.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
};

export default BookDetails;
