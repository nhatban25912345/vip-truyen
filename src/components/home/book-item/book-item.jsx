import { Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';
import './book-item.css'
import PersonIcon from '@mui/icons-material/Person';

const BookItem = ({ book }) => {
  return (
    <Box className="book-item" sx={{ display: 'flex' }}>
      <img src={book.image} alt={book.title} />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', marginLeft: 1 }}>
        <Grid2 container direction="column" spacing={1} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Grid2 sx={{ xs: 3, md: 12 }}>
            <Box>
              <Typography variant="body2" component="span" sx={{ fontWeight: 'bold', fontSize: 14 }}>
                {book.title}
              </Typography></Box>
          </Grid2>
          <Grid2 sx={{ xs: 6, md: 12, flexGrow: 1}}>
          <Typography variant="subtitle2" component="span" sx={{fontSize: 14}}>
              {book.description}
            </Typography>
          </Grid2>
          <Grid2 sx={{ xs: 3, md: 12, display: 'flex', alignItems: 'center'}}>
            <PersonIcon sx={{fontSize: 16, marginRight: 1}}/>
            <Box sx={{flexGrow: 1}}>
              <Typography variant='body2' component='span'>{book.author}</Typography>
            </Box>
            <Button variant="outlined" size='small' sx={{fontSize: 12, color: '#fcba03', borderColor: '#fcba03', textTransform: 'none'}} out="true">{book.genre}</Button>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default BookItem;