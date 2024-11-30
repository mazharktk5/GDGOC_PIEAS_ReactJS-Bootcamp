import React, { createContext, useState } from "react";

// Create Context
export const BookContext = createContext();

// Context Provider
export const BookProvider = ({ children }) => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [favBooks, setFavBooks] = useState([]);

    return (
        <BookContext.Provider value={{ borrowedBooks, setBorrowedBooks, favBooks, setFavBooks }}>
            {children}
        </BookContext.Provider>
    );
};
