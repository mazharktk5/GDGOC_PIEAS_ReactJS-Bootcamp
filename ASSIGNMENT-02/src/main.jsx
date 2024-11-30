import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BookProvider } from "./BookContext";

createRoot(document.getElementById("root")).render(
    <BookProvider>
        <App />
    </BookProvider>
);
