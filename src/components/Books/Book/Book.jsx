import { useSelector } from "react-redux";

const Book = () => {
  const { books } = useSelector((state) => state.books);

  const book = books.map((book) => {
    return (
      <div key={book.id}>
        <h2>{book.name}</h2>
        <span>{book.price}</span>
      </div>
    );
  });

  return <div>{book}</div>;
};

export default Book;
