import React from 'react';
import s from './ApointmentPopup.module.scss';
import { Input } from '../ui/Input';

export const AppointmentPopup = ({ togglePopup }) => {
  return (
    <div className={s.popup}>
      <div className={s.popupInner}>
        <div class={s.popupTitle}>
          <p>Запишитесь к нам</p>
        </div>
        <div>
          <p>После заполнения формы с вами свяжется <br/> администратор и подберет удобное время</p>
        </div>
        <div className={s.formBlock}>
          <Input
            label='Ваше имя'
            name='name'
            placeholder='Иван Иванов'
            onChange={() => { }}
          />
          <Input
            label='Ваш телефон'
            name='tel'
            type='tel'
            placeholder='+7 (999) 352-11-23'
            onChange={() => { }}
          />
          <div className={s.smallInputBlock}>
            <Input
              label='Услуга'
              name='service'
              placeholder='Что-то'
              onChange={() => { }}
            />
            <Input
              label='Дата'
              name='date'
              placeholder='03-06-2023'
              onChange={() => { }}
            />
          </div>

        </div>
        <button
          onClick={togglePopup}
          className={s.enrollBtn}
        >Закрыть попап</button>
      </div>
    </div>
  )
}