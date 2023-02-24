import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, toggleEdit}) {

    const [title, setTitle] = useState(book.title);
    const {updateBookTitle} = useBooksContext();
    const handleChange =(e)=>{
      setTitle(e.target.value);
    }

    const handleSubmit =(e)=> {
        e.preventDefault();
        toggleEdit();
        updateBookTitle(book.id, title)
    }

    // const handleClick = () =>{
    //     toggleEdit(!toggle)
    // }
    return (
      <form className="book-edit" onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <input type="text" value={title} className="input" onChange={handleChange}/>
        </div>
       <button className="button is-primary">Save</button>
      </form>
    );
  }
  
  export default BookEdit;