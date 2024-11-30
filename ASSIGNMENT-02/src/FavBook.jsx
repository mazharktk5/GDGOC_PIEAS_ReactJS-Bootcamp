import React, { useContext } from "react";
import { BookContext } from "./BookContext";

const FavBooks = () => {
    const { favBooks } = useContext(BookContext);

    return (
        <>
        <div>
            <h1>Favorite Books</h1>
            <ul>
                {favBooks.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
            </ul>
        </div>
        <h1 id="footer">ALL Rights Reserved || Mazhar Ahmad </h1>
        </>
        
    );
    
};

export default FavBooks;
