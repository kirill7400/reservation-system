import React, {useEffect, useState} from 'react';
import '../../assets/style/Payment.scss'
import UIInput from "../UIComponents/UIInput";
import UICheckbox from "../UIComponents/UICheckbox";
import UIButton from "../UIComponents/UIButton";

export default function PaymentData({ setPaymentData, setConf, setStep }) {
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telNum, setTelNum] = useState('');
  const [email, setEmail] = useState('');
  const [onlinePay, setOnlinePay] = useState(false);
  const [cashPay, setCashPay] = useState(true);

  useEffect(() => {
    let obj = {
      surname,
      firstName,
      lastName,
      telNum,
      email,
      onlinePay,
      cashPay,
    }

    setPaymentData(obj)

  }, [surname, firstName, lastName, telNum, email, onlinePay, cashPay])

  return(
    <div className='paymentData'>
      <div className='paymentData__item'>
        <div className='paymentData__itemTitle'>
          <div className='font-30'>Персональные данные</div>
        </div>
        <div className='paymentData__itemBody'>
          <div className='paymentData__itemBody-fio'>
            <UIInput label="Фамилия" value={lastName} setValue={setLastName}/>
            <UIInput label="Имя" value={firstName} setValue={setFirstName}/>
            <UIInput label="Отчество" value={surname} setValue={setSurname}/>
          </div>
          <div className='paymentData__itemBody-fio'>
            <UIInput label="Контактный телефон" value={telNum} setValue={setTelNum}/>
          </div>
          <div className='paymentData__itemBody-fio'>
            <UIInput label="E-mail" value={email} setValue={setEmail}/>
          </div>
        </div>

        <div className='paymentData__itemTitle'>
          <div className='font-30'>Способ оплаты</div>
        </div>
        <div className='paymentData__itemBody'>
          <div className='paymentData__itemBody-typePay'>
            <UICheckbox value={ onlinePay } setValue={ setOnlinePay } label={ 'Онлайн' }/>
            <div className='paymentData__itemBody-typePayVar'>
              <div className='font-24'>Банковской картой</div>
              <div className='font-24'>PayPal</div>
              <div className='font-24'>Visa QIWI Wallet</div>
            </div>
          </div>
        </div>
        <div className='paymentData__itemBody-typeCash'>
          <UICheckbox value={ cashPay } setValue={ setCashPay } label={ 'Наличными' }/>
        </div>
      </div>

      <div className='paymentData-btn'>
        <UIButton label={'Купить билеты'} color={'primary'} variant={'contained'} onClick={setConf}/>
      </div>
    </div>
  )
}