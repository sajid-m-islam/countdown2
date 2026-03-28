import { useState } from "react";
import Book from "./components/book";
import FilterGenre from "./components/filterGenre";
const bookData = {
    fiction: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: 10.0,
        },
        { title: "1984", author: "George Orwell", price: 8.5 },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            price: 9.8,
        },
    ],
    "non-fiction": [
        {
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            price: 15.0,
        },
        { title: "In Cold Blood", author: "Truman Capote", price: 12.0 },
        {
            title: "The Diary of a Young Girl",
            author: "Anne Frank",
            price: 7.0,
        },
    ],
    children: [
        { title: "Charlotte's Web", author: "E.B. White", price: 5.0 },
        { title: "The Gruffalo", author: "Julia Donaldson", price: 6.0 },
        {
            title: "Where the Wild Things Are",
            author: "Maurice Sendak",
            price: 8.0,
        },
    ],
};

function App() {
    const [filter, setFilter] = useState("all");

    const genres = Object.keys(bookData);
    const displayedBooks =
        filter === "all" ? Object.values(bookData).flat() : bookData[filter];

    return (
        <>
            <div className="header">Online Bookstore</div>
            <FilterGenre
                genres={genres}
                onSelectGenre={setFilter}
            ></FilterGenre>

            <div className="book-list">
                {displayedBooks.map((book, index) => (
                    <Book key={index} {...book} />
                ))}
            </div>
        </>
    );
}

export default App;
