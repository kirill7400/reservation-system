import React from 'react';
import Pagination from '@mui/material/Pagination';

export default function UIPagination() {
  return(
    <Pagination className='UIPagination' count={10} variant="outlined" shape="rounded" />
  )
}