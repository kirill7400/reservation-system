import React, {useState} from 'react';
import '../assets/style/Footer.scss'
import contact1 from "../assets/icons/contact1.svg";
import contact2 from "../assets/icons/contact2.svg";
import contact3 from "../assets/icons/contact3.svg";
import contact4 from "../assets/icons/contact4.svg";
import sub1 from "../assets/icons/sub1.svg";
import sub2 from "../assets/icons/sub2.svg";
import sub3 from "../assets/icons/sub3.svg";
import sub4 from "../assets/icons/sub4.svg";
import sub5 from "../assets/icons/sub5.svg";
import footer from "../assets/icons/footer.svg";
import UIInput from "./UIComponents/UIInput";
import UIButton from "./UIComponents/UIButton";
import {subscribe} from "../common/api";
import UIModal from "./UIComponents/UIModal";

export default function Footer() {
  const initModalConfig = {
    show: false,
    message: ''
  }

  const [email, setEmail] = useState('')
  const [modalConfig, setModalConfig] = useState(initModalConfig)

  const subscribeBtn = () => {
    subscribe(email)
      ?.then(res => {
        if (res.response.code !== 200) setModalConfig({ show: true, message: 'Произошла ошибка!' })
        else setModalConfig({ show: true, message: 'Вы успешно подписаны!' })
      })
  }

  return (
    <div className='main-footer' id="contacts">
      <UIModal open={modalConfig} setOpen={setModalConfig}/>

      <div className='main-footer__contacts'>
        <div className='main-footer__contact-us'>
          <div className='font-30'>Свяжитесь с нами</div>
          <div className='main-footer__contact-item'>
            <img src={contact1} alt="contact1"/>
            <div className='font-24'>8 (800) 000 00 00</div>
          </div>
          <div className='main-footer__contact-item'>
            <img src={contact2} alt="contact1"/>
            <div className='font-24'>inbox@mail.ru</div>
          </div>
          <div className='main-footer__contact-item'>
            <img src={contact3} alt="contact1"/>
            <div className='font-24'>tu.train.tickets</div>
          </div>
          <div className='main-footer__contact-item'>
            <img src={contact4} alt="contact1"/>
            <div className='font-24 address'>г. Москва ул. <br/> Московская 27-35 <br/> 555 555</div>
          </div>
        </div>

        <div className='main-footer__contact-subscribe'>
          <div className='font-30'>Свяжитесь с нами</div>
          <div className='main-footer__contact-email'>
            <div className='font-24'>Будьте в курсе событий</div>
            <div className='main-footer__email-input'>
              <UIInput placeholder="e-mail" value={ email } setValue={ setEmail }/>
              <UIButton label={'Отправить'} color={'white'} variant={'outlined'} onClick={ subscribeBtn }/>
            </div>
          </div>
          <div className='main-footer__contact-social'>
            <div className='font-30'>Подписывайтесь на нас</div>
            <div className='main-footer__contact-icons'>
              <img src={sub1} alt="sub1"/>
              <img src={sub2} alt="sub2"/>
              <img src={sub3} alt="sub3"/>
              <img src={sub4} alt="sub4"/>
              <img src={sub5} alt="sub5"/>
            </div>
          </div>
        </div>
      </div>

      <div className='main-footer__logo'>
        <div className='font-24'>Лого</div>
        <img src={footer} alt="footer"/>
        <div className='font-24'>2018 WEB</div>
      </div>
    </div>
  )
}