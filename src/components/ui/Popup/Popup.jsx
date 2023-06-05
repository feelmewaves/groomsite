import s from './Popup.module.scss'

export function Popup({togglePopup, children}) {
  function handleClickEmpty(e) {
    togglePopup();
  }

  return (
    <div className={s.popup} onClick={handleClickEmpty}>
      {children}
    </div>
  )
}