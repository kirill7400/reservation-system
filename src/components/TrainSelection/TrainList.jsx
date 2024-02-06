import React, {useState} from 'react';
import '../../assets/style/TrainList.scss'
import UISelect from "../UIComponents/UISelect";
import TrainItem from "./TrainItem";

export default function TrainList() {
  const [sort, setSort] = useState('');

  return(
    <div className='train-list'>
      <div className='train-list__filters'>
        <div className='font-16'>найдено 20</div>
        <div className='font-16 train-list__sort'>
          <div className='font-16'>сортировать по:</div>
          <UISelect value={ sort } setValue={ setSort }/>
        </div>
        <div className='font-16'>показывать по: 5 10 20</div>
      </div>

      <div className='train-list__items'>
        <TrainItem/>
      </div>
    </div>
  )
}