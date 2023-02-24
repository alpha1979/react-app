import { createContext, useCallback, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
   
    const [books, setBooks] = useState([]);

    const createNewBook = async (title) => {
    
        const response = await axios.post('http://localhost:3001/books', {
          title
        });
        const updatedBook = [...books, {
        id: response.data.id,
        title: response.data.title
      }]
    
        setBooks(updatedBook);
    }
  
    const showBooks = useCallback(async ()=>{
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data)
      // console.log(books)
    },[]);

    
  
    const deleteBookById = async (id) => {  
       await axios.delete(`http://localhost:3001/books/${id}`);
      const deletedBook = books.filter((book) => {
        return book.id !== id;
      });
      setBooks(deletedBook);
    };
  
  
    const updateBookTitle = async (id, newTitle)=> {
      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle
      })
      const updatedBook = books.map((book) => {
        if (book.id === id) {
      
          return {...book, ...response.data}
        }
        return book;
      })
  
      setBooks(updatedBook);
      console.log(books)
    }

    const valueToshare = {
        books,
        createNewBook,
        showBooks,
        deleteBookById,
        updateBookTitle
    };

    return (
        <BooksContext.Provider value={valueToshare}>
            {children}
        </BooksContext.Provider>
    );
    
};



export { Provider };
export default BooksContext;