import { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Paradise is Here', author: 'Manish suyal', id: 1 },
        { title: 'Heaven on Fire', author: 'Manish suyal', id: 2 },
    ])
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: Math.random() }]);
    }
    const removeBook = (id) => {
        setBooks(books.filter((book) => book.id !== id))
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider