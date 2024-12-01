import React, { useContext } from "react";
import { BookContext } from "./BookContext";
import BookCard from "./BookCard";

const BookDetails = () => {
    const { books } = useContext(BookContext);

    return (
        <div>
            <h1>All Book Details</h1>
            {books.map((book) => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
};

export default BookDetails;
