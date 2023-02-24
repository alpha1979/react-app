import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";


function BookList() {
    
    const {books} = useBooksContext();

      const bookShow =  books.map(book => {
            return <BookShow key={book.id} book={book} />
        })
    
    return (
      <div className="book-list">
        {bookShow}
      </div>
    );
  }
  
  export default BookList;