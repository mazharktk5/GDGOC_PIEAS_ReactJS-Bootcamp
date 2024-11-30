import React, { useContext } from "react";
import { BookContext } from "./BookContext";

const BorrowedBooks = () => {
    const { borrowedBooks } = useContext(BookContext);

    return (
        <div>
            <h1>Borrowed Books</h1>
            <ul>
                {borrowedBooks.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
            </ul>
        </div>
    );
};

export default BorrowedBooks;
