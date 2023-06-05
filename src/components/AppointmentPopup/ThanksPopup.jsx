import React from 'react';
import s from './ApointmentPopup.module.scss';

export function ThanksPopup() {
  return (
    <div className={s.popupInner}>
      <div className={s.popupTitle}>
        <h2>Спасибо за обращение!</h2>
      </div>
      <div className={s.popupDescription}>
        <p>Ваша заявка принята. Ожидайте звонка <br/> от администратора в течении 10 минут</p>
      </div>
      <img src="images/popupdog2.png" width="160" height="160" className={s.thanksPopupImage} />
    </div>
  )
}