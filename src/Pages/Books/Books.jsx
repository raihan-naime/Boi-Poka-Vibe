import React, { use, useEffect, useState } from 'react';

const Books = () => {
    const [allBokks, setAllBooks] = useState([])
    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setAllBooks(data)
        )
    }, [])
    return (
        <div>
            <h1>books</h1>
        </div>
    );
};

export default Books;