import React from 'react';
import BookItem from '../book-item/book-item';
import { Grid2 } from '@mui/material';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <Grid2 container spacing={8}>
        {books.map(book => (
          <Grid2 key={book.id} size={{xs: 6, md: 6}}>
            <BookItem key={book.id} book={book} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default BookList;