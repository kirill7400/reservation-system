import React, {useEffect, useState} from 'react';
import '../../assets/style/PassengersList.scss'
import passengers2 from "../../assets/icons/passengers2.svg";
import passengers4 from "../../assets/icons/passengers4.svg";
import UISelect from "../UIComponents/UISelect";
import UIInput from "../UIComponents/UIInput";
import UIToggleButton from "../UIComponents/UIToggleButton";
import UIDatePicker from "../UIComponents/UIDatePicker";
import UICheckbox from "../UIComponents/UICheckbox";
import UIButton from "../UIComponents/UIButton";

export default function PassengerItem({ id, data, setData }) {
  const genderVariants = [{ value: 1, label: 'М' }, { value: 2, label: 'Ж' }]

  const [ticketType, setTicketType] = useState('');
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState(1);
  const [birthday, setBirthday] = useState();
  const [limited, setLimited] = useState();
  const [plus, setPlus] = useState(true);

  useEffect(() => {
    let temp = data
    temp[`passenger${id}`] = {
      ticketType,
      surname,
      firstName,
      lastName,
      gender
    }

    setData(temp)
  }, [ticketType, surname, firstName, lastName, gender]);

  return(
    <div className='passengersList__item'>
      <div className='passengersList__itemTitle'>
        <div className='passengersList__itemHide' onClick={() => setPlus(!plus)}>
          {plus ? <img src={passengers2} alt="passengers2"/> : <img src={passengers4} alt="passengers4"/>}
        </div>
        <div className='font-30'>Пассажир {id}</div>
        <div className='close'>&#215;</div>
      </div>

      <div className={plus ? 'passengersList__itemBody' : 'passengersList__itemBody hide'}>
        <div className='passengersList__itemBody-ticketType'>
          <UISelect value={ticketType} setValue={setTicketType}/>
        </div>
        <div className='passengersList__itemBody-fio'>
          <UIInput label="Фамилия" value={ lastName } setValue={ setLastName }/>
          <UIInput label="Имя" value={ firstName } setValue={ setFirstName }/>
          <UIInput label="Отчество" value={ surname } setValue={ setSurname }/>
        </div>
        <div className='passengersList__itemBody-data'>
          <UIToggleButton value={ gender } setValue={ setGender } variants={ genderVariants }/>
          <UIDatePicker value={ birthday } setValue={ setBirthday }/>
        </div>
        <div className='passengersList__itemBody-data'>
          <UICheckbox value={ limited } setValue={ setLimited } label={ 'Ограниченная подвижность' }/>
        </div>
        <div className='passengersList__itemBody-passportData'>
          <UISelect label="Тип документа" value={ticketType} setValue={setTicketType}/>
          <UIInput label="Серия" value={ firstName } setValue={ setFirstName }/>
          <UIInput label="Номер" value={ surname } setValue={ setSurname }/>
        </div>
        <div className='passengersList__itemBody-btn'>
          <UIButton label={'Следующий пассажир'} color={'white'} variant={'outlined'}/>
        </div>
      </div>
    </div>
  )
}