import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function UISelect({ value , setValue, placeholder, variant, label, variants }) {
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
        { variants.map((item, i) => <MenuItem key={i} value={item.value}>{item.label}</MenuItem>) }
      </Select>
    </div>

  )
}