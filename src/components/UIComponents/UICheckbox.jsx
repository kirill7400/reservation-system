import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function UICheckbox({ value, setValue, label }) {
  const handleChange = (event) => {
    setValue(event.target.checked);
  };

  return(
    <FormControlLabel
      className='UICheckbox'
      label={label}
      control={<Checkbox checked={value} onChange={handleChange}/>}
    />

  )
}