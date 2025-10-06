import React, { Suspense, use, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBokks, setAllBooks] = useState([])
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data)
    //     )
    // }, [])

    // const booksPromise = fetch('booksData.json')
    // .then(res => res.json())
    return (
        <div>
            <h1 className='text-5xl my-10 bg-gray-200 py-5 font-semibold text-center '>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
                {
                data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
            }
            </div>
            </Suspense>
        </div>
    );
};

export default Books;