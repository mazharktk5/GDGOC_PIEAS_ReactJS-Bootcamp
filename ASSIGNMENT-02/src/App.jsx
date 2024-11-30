import React from "react";
import HighRateBook from "./HighRateBook";
import BookDetails from "./BookDetails";
import FictionBooks from "./FictionBooks";
import BookAuthors from "./BookAuthor";
import BorrowedBook from "./BorrowedBook";
import FavBook from "./FavBook";
import "./App.css";

const App = () => {
    return (
        <>
            <div id="app">
                <h1>Library Manager</h1>
                <HighRateBook />
                <BookDetails />
                <FictionBooks />
                <BookAuthors />
                <BorrowedBook />
                <FavBook />
            </div>
        </>
    );
};

export default App;
