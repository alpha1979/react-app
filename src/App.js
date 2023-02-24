import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

function App() {
  const { showBooks } = useBooksContext();
  useEffect(() => {
    showBooks();
  },[showBooks]);

  return (
    <div className="app">
      <BookList />
      <BookCreate />
     
    </div>
  );
}

export default App;