import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);
  const { author, bookName, category, image, rating, review, tags } =
    singleBook;

  return (
    <div className="card bg-base-100 p-5 border border-gray-200 shadow-sm">
      <figure className="p-5 bg-gray-200">
        <img className="rounded-2xl h-full " src={image} alt="Books" />
      </figure>
      <div className="">

      <button className="btn btn-active btn-accent">Read</button>
      <button className="btn btn-active btn-info">WiteList</button>
      </div>
    </div>
  );
};

export default BookDetails;
