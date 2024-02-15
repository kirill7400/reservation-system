import TextField from '@mui/material/TextField';
import React from 'react';
import {InputAdornment} from "@mui/material";

export default function UIInput({ placeholder='Введите...', value, setValue, adornment = null, label, onClick, inputRef }) {

  return (
    <div className='UIInput-div' onClick={ onClick } ref={inputRef}>
      {label && <div className='UIInput-label'>{ label }</div>}
      <TextField
        className='UIInput'
        placeholder={ placeholder }
        variant="outlined"
        value={ value }
        onChange={ (event) => { setValue(event.target.value)} }
        InputProps={{
          startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>,
        }}
      />
    </div>
  )
}