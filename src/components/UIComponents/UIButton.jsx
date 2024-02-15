import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import React from 'react';

export default function UIButton({ label = 'Кнопка', color, variant, onClick }) {
  const theme = createTheme({
    palette: {
      white: {
        main: '#fff',
        light: '#fff',
        dark: '#fff',
        contrastText: '#fff',
      },

      primary: {
        main: 'rgba(255, 168, 0, 1)',
        light: 'rgba(255, 168, 0, 1)',
        dark: 'rgba(255, 168, 0, 1)',
        contrastText: '#fff',
      },
    },
  });


  return (
    <ThemeProvider theme={ theme }>
      <Button className='UIButton' onClick={onClick} variant={ variant } color={ color }>{ label }</Button>
    </ThemeProvider>
  )
}