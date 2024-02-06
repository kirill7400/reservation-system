import React from 'react';
import Switch from "@mui/material/Switch";
import { alpha, styled } from '@mui/material/styles';

export default function UISwitch({ value, setValue }) {

  const WSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: 'rgba(255, 168, 0, 1)',
      '&:hover': {
        backgroundColor: alpha('rgba(255, 168, 0, 1)', theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'rgba(255, 168, 0, 1)',
    },
  }));

  return (
    <WSwitch className='UISwitch' checked={ value } onChange={ (event) => setValue(event.target.checked) }/>
  )
}