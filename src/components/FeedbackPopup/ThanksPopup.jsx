import React from 'react';
import s from './FeedbackPopup.module.scss';

export function ThanksPopup() {
  return (
    <div className={s.popupInner}>
      <div className={s.popupTitle}>
        <h2>Спасибо за отзыв!</h2>
      </div>
      <img src="images/popupdog2.png" width="160" height="160" className={s.thanksPopupImage} />
    </div>
  )
}