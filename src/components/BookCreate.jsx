import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const [title, setTitle] = useState('');
    const {createNewBook} = useBooksContext();
    const handleClick = (e) => {
        e.preventDefault();
        createNewBook(title);
       setTitle('');
    //    console.log(title)
    }
    const handleChange = (e) => {

        setTitle(e.target.value);
    }

    return (
      <div className="book-create">
        <h3>Add a new book</h3>
       <input className="input" type="text" value= {title} onChange={handleChange}/>
       <button className="button" onClick={handleClick}>Submit</button>
      </div>
    );
  }
  
  export default BookCreate;