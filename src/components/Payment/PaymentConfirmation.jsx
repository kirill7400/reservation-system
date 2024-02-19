import React, {useState} from 'react';
import '../../assets/style/PaymentConfirmation.scss'
import TrainItem from "../TrainSelection/TrainItem";
import FinishPassenger from "../Finish/FinishPassenger";
import UIButton from "../UIComponents/UIButton";
import {payAndConfirm} from "../../common/api";
import UIModal from "../UIComponents/UIModal";
import {formatDate} from "../../common/utils";

export default function PaymentConfirmation({ trainData, passInfo, users, payData, state }) {
  const initModalConfig = {
    show: false,
    message: ''
  }
  const [modalConfig, setModalConfig] = useState(initModalConfig)

  const confirmation = () => {
    let orderData = {
      user: {
        first_name: payData.firstName,
        last_name: payData.surname,
        patronymic: payData.lastName,
        phone: payData.telNum,
        email: payData.email,
        payment_method: "cash"
      },
    }

    if (state.train.arrival) {
      orderData.arrival = {
        route_direction_id: state.train.arrival['_id'],
        seats: []
      }

      Object.keys(users).map((key) => users[key]).forEach(pass => {
        orderData.arrival.seats.push({
          coach_id: state.passInfo.arrival.selectedCarriage.coach['_id'],
          person_info: {
            is_adult: pass.ticketType === 1,
            first_name: pass.firstName,
            last_name: pass.surname,
            patronymic: pass.lastName,
            gender: pass.gender === 1,
            birthday: formatDate(pass.birthday),
            document_type: pass.docType === 1 ? 'паспорт' : 'свидетельство',
            document_data: pass.serialPassport
          },
          seat_number:  state.passInfo.arrival.selectSeats[0],
          is_child: pass.ticketType === 2,
          include_children_seat: !!state.passInfo.arrival.withChildQty
        })
      })
    }

    if (state.train.departure) {
      orderData.departure = {
        route_direction_id: state.train.departure['_id'],
        seats: []
      }

      Object.keys(users).map((key) => users[key]).forEach(pass => {
        orderData.departure.seats.push({
          coach_id: state.passInfo.departure.selectedCarriage.coach['_id'],
          person_info: {
            is_adult: pass.ticketType === 1,
            first_name: pass.firstName,
            last_name: pass.surname,
            patronymic: pass.lastName,
            gender: pass.gender === 1,
            birthday: formatDate(pass.birthday),
            document_type: pass.docType === 1 ? 'паспорт' : 'свидетельство',
            document_data: pass.serialPassport
          },
          seat_number:  state.passInfo.departure.selectSeats[0],
          is_child: pass.ticketType === 2,
          include_children_seat: !!state.passInfo.departure.withChildQty
        })
      })
    }

    console.log(orderData, state)

    payAndConfirm(orderData)
      .then((res) => {
        console.log(res)
        setModalConfig({ show: true, message: 'Ваш заказ успешно оформлен!' })
      })
      .catch(() => setModalConfig({ show: true, message: 'Произошла ошибка!' }))
  }

  return(
    <div className='paymentConfirmation'>
      <div className='paymentConfirmation-items'>
        <div className='paymentConfirmation-train'>
          <div className='paymentConfirmation__title'>
            <div className='font-30'>Поезд</div>
          </div>

          <TrainItem item={trainData} viewBtn={false}/>
        </div>

        <UIModal open={modalConfig} setOpen={setModalConfig}/>

        <div className='finishData__item'>
          <div className='finishData__itemTitle'>
            <div className='font-30'>Пассажиры</div>
          </div>
          <div className='finishData__itemPassengers'>
            <div className='finishData__itemPassengers-left'>
              {Object.keys(users).map((key) => users[key]).map((item, i) => <FinishPassenger key={i} data={item}/>)}
            </div>
            <div className='finishData__itemPassengers-right'>
              <div className='finishData__itemPassengers-cost'>
                <div className='font-30'>Всего</div>
                <div
                  className='font-30'>{(+passInfo.arrival.adultQty + +passInfo.arrival.childrenQty) * passInfo.arrival.selectedCarriage.coach.top_price} &#8381;</div>
              </div>
              <UIButton label={'Изменить'} color={'white'} variant={'outlined'}/>
            </div>
          </div>
        </div>

        <div className='finishData__item'>
          <div className='finishData__itemTitle'>
            <div className='font-30'>Способ оплаты</div>
          </div>
          <div className='finishData__item-typePay'>
            <div className='finishData__item-typePayLeft'>
              Наличными
            </div>
            <div className='finishData__item-typePayRight'>
              <UIButton label={'Изменить'} color={'white'} variant={'outlined'}/>
            </div>
          </div>
        </div>

        <div className='paymentData-btn'>
          <UIButton label={'Подтвердить'} color={'primary'} variant={'contained'} onClick={confirmation}/>
        </div>
      </div>
    </div>
  )
}