import React from 'react';
import '../assets/style/Reviews.scss'
import image2 from "../assets/image/review-image2.png";
import image1 from "../assets/image/review-image1.png";

export default function Reviews() {
  return (
    <div className='main-reviews' id="reviews">
      <div className='main-reviews__logo'>Отзывы</div>
      <div className='main-reviews__cards'>
        <div className='main-reviews__card'>
          <img src={image2} alt="image1"/>
          <div className='main-reviews__card-text'>
            <div className='main-reviews__card-header'>Екатерина Вальнова</div>
            <div className='main-reviews__card-review'>“Доброжелательные подсказки <br/> на всех этапах помогут
              правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн
              билет впервые.”
            </div>
          </div>
        </div>
        <div className='main-reviews__card'>
          <img src={image1} alt="image2"/>
          <div className='main-reviews__card-text'>
            <div className='main-reviews__card-header'>Евгений Стрыкало</div>
            <div className='main-reviews__card-review'>“СМС-сопровождение до посадки <br/> Сразу после оплаты ж/д
              билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.”
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}