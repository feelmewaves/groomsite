import React from 'react';
import s from './ApointmentPopup.module.scss';
import { Input } from '../ui/Input';
import { Select } from '../ui/SelectInput';
import { DatePicker } from '../ui/DatePicker';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../ui/Checkbox';
import { postRecord } from '@/api';

const serviceList = [
  { value: 'haircut', label: 'Стрижка' },
  { value: 'procudures', label: 'Гигиенические процедуры' },
  { value: 'complexes', label: 'SPA-комплексы' },
  { value: 'staining', label: 'Окрашивание' },
];


export const AppointmentPopup = ({handleChangePopup}) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = data => {
    const result = {
      name: data.name,
      service: data.service.label,
      number: data.tel,
      date: data.dateService.toISOString(),
      created_date: new Date().toISOString(),
      verify: false,
    }

    postRecord(result);

    handleChangePopup();
  };

  function handleClickInner(e) {
    e.stopPropagation();
  }

  return (
    <div className={s.popupInner} onClick={handleClickInner}>
      <div className={s.popupTitle}>
        <h2>Запишитесь к нам</h2>
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
            placeholder={"Выберите услугу"}
            label="Услуги"
          />
          <DatePicker
            control={control}
            name='dateService'
          />
        </div>
        <div className={s.policyBlock}>
          <Checkbox
            id="policy-agreement"
            name="policy-agreement"
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
      <img src="images/popupdog1.png" width="180" height="180" className={s.popupImage} />
    </div>
  )
}