import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

export default function UISlider({value, setValue, min, max, labelFormat}) {
  function timeFormat(value) {
    return `${value}:00`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  return(
    <Box sx={{ width: 290 }}>
      <Slider
        className='UISlider'
        value={value}
        onChange={handleChange}
        min={ min }
        max={ max }
        step={ 1 }
        valueLabelDisplay="on"
        valueLabelFormat={ labelFormat === 'time' ? timeFormat : (v) => v}
      />
    </Box>
  )
}