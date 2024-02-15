import React from 'react';
import '../assets/style/Main.scss'
import UIButton from "./UIComponents/UIButton";
import icon1 from '../assets/icons/1.svg'
import icon2 from '../assets/icons/2.svg'
import icon3 from '../assets/icons/3.svg'
import Footer from "./Footer";
import Reviews from "./Reviews";
import Logo from "./Logo";

export default function Main() {

  return(
    <div className='main'>
      <Logo type={'main'}/>

      <div className='main-divider'></div>

      <div className='main-about' id="about">
        <div className='main-about__logo-text'>О нас</div>
        <div className='main-about__text-container'>
          <div className='main-about__text-line'></div>
          <div className='main-about__text'>
            <div>
              Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем
              все больше людей заказывают жд билеты через интернет.
              <br/><br/>
              Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
              Мы расскажем о преимуществах заказа через интернет.
              <br/><br/>
              <b>Покупать жд билеты дешево можно за 90 суток до отправления поезда.
                Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</b>
            </div>
          </div>
        </div>
      </div>

      <div className='main-howWork' id="howWork">
        <div className='main-howWork__header'>
          <div className='main-howWork__header-text'>Как это работает</div>
          <UIButton label={'Узнать больше'}/>
        </div>
        <div className='main-howWork__icons'>
          <div className='main-howWork__iconsItem'>
            <img src={icon1} alt="icon1"/>
            <div className='main-howWork__iconsText'>Удобный заказ <br/> на сайте</div>
          </div>
          <div className='main-howWork__iconsItem'>
            <img src={icon2} alt="icon2"/>
            <div className='main-howWork__iconsText'>Нет необходимости <br/> ехать в офис</div>
          </div>
          <div className='main-howWork__iconsItem'>
            <img src={icon3} alt="icon3"/>
            <div className='main-howWork__iconsText'>Огромный выбор <br/> направлений</div>
          </div>
        </div>
      </div>

      <Reviews/>

      <Footer/>
    </div>
  )
}