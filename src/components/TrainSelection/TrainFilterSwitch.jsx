import UISwitch from "../UIComponents/UISwitch";
import React from "react";

export default function TrainFilterSwitch({ value, setValue, control, i }) {
  return (
    <div className='train-filter__option-item'>
      <img src={control.img} alt={'option' + (i + 1)}/>
      <div className='font-18 train-filter__option-text'>{control.label}</div>
      <UISwitch value={value} setValue={setValue}/>
    </div>
  )
}