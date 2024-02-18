import React, {useEffect, useState} from 'react';
import '../../assets/style/TrainList.scss'
import UISelect from "../UIComponents/UISelect";
import TrainItem from "./TrainItem";

export default function TrainList({ list, leftFilters }) {
  const sortBy = [
    {value: 1, label: 'времени'},
    {value: 2, label: 'стоимости'},
    {value: 3, label: 'длительности'},
  ]
  const [sort, setSort] = useState('');
  const [showBy, setShowBy] = useState('5');
  const [data, setData] = useState({});

  useEffect(() => {
    setData(list)
    //console.log(state)
  }, [])


  return(
    <div className='train-list'>
      <div className='train-list__filters'>
        <div className='font-16'>найдено {list?.length || 0}</div>
        <div className='font-16 train-list__sort'>
          <div className='font-16'>сортировать по:</div>
          <UISelect variants={ sortBy } value={ sort } setValue={ setSort }/>
        </div>
        <div className='train-list__filters-showBy font-16'>
          <div>показывать по:</div>
          <div
            className={showBy === '5' ? 'showBy-active' : 'showBy'}
            onClick={() => setShowBy('5')}
          >5</div>
          <div
            className={showBy === '10' ? 'showBy-active' : 'showBy'}
            onClick={() => setShowBy('10')}
          >10</div>
          <div
            className={showBy === '20' ? 'showBy-active' : 'showBy'}
            onClick={() => setShowBy('20')}
          >20</div>
        </div>
      </div>

      <div className='train-list__items'>
        { list?.map((item, i) => <TrainItem item={item} leftFilters={leftFilters} key={i}/>) }
      </div>
    </div>
  )
}