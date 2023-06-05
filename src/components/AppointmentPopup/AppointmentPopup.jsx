import React, { useEffect } from 'react';
import s from './ApointmentPopup.module.scss';
import { Input } from '../ui/Input';
import { Select } from '../ui/SelectInput';
import { DatePicker } from '../ui/DatePicker';
import { useForm } from 'react-hook-form';

const serviceList = [
  { value: 'haircut', label: 'Стрижка' },
  { value: 'procudures', label: 'Гигиенические процедуры' },
  { value: 'complexes', label: 'SPA-комплексы' },
  { value: 'staining', label: 'Окрашивание' },
];


export const AppointmentPopup = ({ togglePopup }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  function handleClickInner(e) {
    e.stopPropagation();
  }

  function handleClickEmpty(e) {
    togglePopup();
  }

  useEffect(() => {
    console.log({ ...register('test') })
  }, [])

  return (
    <div className={s.popup} onClick={handleClickEmpty}>
      <div className={s.popupInner} onClick={handleClickInner}>
        <div className={s.popupTitle}>
          <p>Запишитесь к нам</p>
        </div>
        <div className={s.popupDescription}>
          <p>После заполнения формы с вами свяжется <br /> администратор и подберет удобное время</p>
        </div>
        <form className={s.formBlock} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='Ваше имя'
            placeholder='Иван Иванов'
            {...register('name')}
          />
          <Input
            label='Ваш телефон'
            type='tel'
            placeholder='+7 (999) 352-11-23'
            {...register('tel')}
          />
          <div className={s.smallInputBlock}>
            <Select
              options={serviceList}
              name='service'
              control={control}
            />
            <DatePicker 
              control={control}
              name='dateService'
            />
          </div>
          <div className={s.policyBlock}>
            <input
              type="checkbox"
              id="policy-agreement"
              name="policy-agreement"
              required
              className={s.customCheckbox}
            />
            <label htmlFor="policy-agreement">
              <p>Я согласен с <span className={s.policyInfo}>политикой конфиденциальности</span></p>
            </label>
          </div>
          <button
            className={s.enrollBtn}
            type="submit"
          >Отправить</button>
        </form>
      </div>
    </div>
  )
}