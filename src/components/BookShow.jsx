import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false)
    const {deleteBookById} = useBooksContext();
    const handleDeleteClick = () => {
        deleteBookById(book.id)
    };
    const handleUpdateClick =() =>{
        setShowEdit(!showEdit);
    }

    const handleOnSubmit =() =>{
        setShowEdit(false)
    }
    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} toggleEdit={handleOnSubmit}/>
    }
     return (
      <div className="book-show">
        <img alt={book.title} src={`https://picsum.photos/seed/${book.id}/300/200`} />
        <div> {content}</div>
        <div className="actions">
            <button className="delete" onClick={handleDeleteClick}>x</button>
            <button className="edit" onClick={handleUpdateClick}>x</button>
        </div>
        
       
      </div>
    );
  }
  
  export default BookShow;