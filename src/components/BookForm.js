import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

const BookForm = () => {

    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) =>  {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='BOOK TITLE' value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder='AUTHOR' value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value='ADD BOOK'/>
        </form>
    )
}

export default BookForm