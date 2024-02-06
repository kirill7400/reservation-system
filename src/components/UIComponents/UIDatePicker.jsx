import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ru } from 'date-fns/locale';
import { ruRU } from '@mui/x-date-pickers/locales';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function UIDatePicker({ value, setValue }) {
const locale = ruRU.components.MuiLocalizationProvider.defaultProps.localeText

  return (
      <LocalizationProvider dateAdapter={ AdapterDateFns } adapterLocale={ ru } localeText={ locale }>
        <DatePicker className='UIDatePicker' locale={ru} value={ value } onChange={ (newValue) => { setValue(newValue)} }/>
      </LocalizationProvider>
  )
}