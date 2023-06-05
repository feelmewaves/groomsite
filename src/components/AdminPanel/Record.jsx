import { formateDate } from '@/utils'
import { Checkbox } from '../ui/Checkbox'
import s from './AdminPanel.module.scss'

export function Record({ record, onChangeVerify }) {
  return (
    <>
      <div>Дата заявки: {formateDate(record.created_date)}</div>
      <div className={s.record}>
        <div className={s.recordInfo}>
          <div>
            <div>Имя: {record.name}</div>
            <div>Номер телефона: {record.number}</div>
          </div>
          <div>
            <div>Услуга: {record.service}</div>
            <div>Дата: {formateDate(record.date)}</div>
          </div>
        </div>
        <div>
          <Checkbox
            id={`recordCheck-${record.id}`}
            name="recordCheck"
            checked={record.verify}
            onChange={() => onChangeVerify(record.id)}
          />
          <label htmlFor={`recordCheck-${record.id}`}></label>
        </div>
      </div>
    </>
  )
}