import EnrollBtn from '../ui/EnrollBtn/EnrollBtn'
import s from './AdminPanel.module.scss'

export function Feedback({ feedback, onChangeDelete }) {
  return (
    <>
      <div className={s.feedback}>
        <div className={s.feedbackInfo}>
          <div className={s.mainInfo}>
            <div>Имя: {feedback.ownerName}</div>
            <div>Имя питомца: {feedback.petName}</div>
            <div>Рейтинг: {feedback.rating}</div>
            <div>Почта: {feedback.email}</div>
            <EnrollBtn 
              outline={true}
              text='Удалить'
              className={s.deleteButton}
              onClick={() => onChangeDelete(feedback.id)}
            />
          </div>
          <div>
            <div>Отзыв: {feedback.feedback}</div>
          </div>
        </div>
      </div>
    </>
  )
}