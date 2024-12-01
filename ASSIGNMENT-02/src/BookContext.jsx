import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [favBooks, setFavBooks] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchBooks = async () => {
            console.log("Fetching books...");  // Log when fetch starts
            try {
                const response = await fetch("/books.json");
                console.log("Response Status:", response.status);  // Log status of the response

                if (!response.ok) {  // Check if response is successful
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                console.log("Fetched data:", data); // Log the data after it is fetched
                setBooks(data); // Update books state
            } catch (error) {
                console.error("Error fetching books:", error); // Log any errors
            } finally {
                setLoading(false); // Stop loading
            }
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        console.log("Books state updated:", books);  // Log the books state whenever it changes
    }, [books]);

    return (
        <BookContext.Provider
            value={{
                books,
                borrowedBooks,
                setBorrowedBooks,
                favBooks,
                setFavBooks,
            }}
        >
            {loading ? <p>Loading books...</p> : children}
        </BookContext.Provider>
    );
};
