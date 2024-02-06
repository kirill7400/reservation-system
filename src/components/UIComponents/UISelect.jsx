import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function UISelect({ value , setValue, placeholder, variant, label }) {
  return(
    <div className='UISelect-div'>
      { label && <div className='UISelect-label'>{ label }</div> }
      <Select
        className='UISelect'
        value={ value }
        displayEmpty
        onChange={ (event) => setValue(event.target.value) }
      >
        <MenuItem disabled value=""><em>{ placeholder }</em></MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>

  )
}