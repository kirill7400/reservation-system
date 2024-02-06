import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function UIToggleButton({ value, setValue, variants }) {
  const handleChange = (event, newAlignment) => {
    setValue(newAlignment);
  };

  return(
    <ToggleButtonGroup
      className='UIToggleButton'
      color="primary"
      value={ value }
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      { variants.map((item,  i) => <ToggleButton key={i} value={item.value}>{item.label}</ToggleButton>) }
    </ToggleButtonGroup>
  )
}