import React from "react";
import HighRateBook from "./HighRateBook";
import BookDetails from "./BookDetails";
import FictionBooks from "./FictionBooks";
import BookAuthors from "./BookAuthor";

const App = () => {
    return (
        <div>
            <h1>Library Manager</h1>
            <HighRateBook />
            <BookDetails />
            <FictionBooks />
            <BookAuthors />
        </div>
    );
};

export default App;
