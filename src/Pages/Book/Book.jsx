import React, { use } from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(booksPromise)
  // console.log(data);
//   console.log(singleBook);
  const { bookId, author, bookName, category, image, rating, review, tags } =
    singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-base-100 p-5 border border-gray-200 shadow-sm">
      <figure className="h-75 bg-gray-200">
        <img className="rounded-2xl h-70 " src={image} alt="Books" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{author}</div>
        </h2>
        {/* <p>{review}</p> */}
        <span>
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </span>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
