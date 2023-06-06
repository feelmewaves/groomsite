import React from 'react';
import s from './FeedbackPopup.module.scss';
import { Input } from '../ui/Input';
import { Select } from '../ui/SelectInput';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../ui/Checkbox';
import { postFeedback } from '@/api';

const serviceList = [
  { value: 'rating-1', label: '1' },
  { value: 'rating-2', label: '2' },
  { value: 'rating-3', label: '3' },
  { value: 'rating-4', label: '4' },
  { value: 'rating-5', label: '5' },
];


export const FeedbackPopup = ({ handleChangePopup }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = data => {

    const result = {
      ownerName: data.nameOwner,
      petName: data.namePet,
      rating: data.rating.label,
      email: data.email,
      created_date: new Date().toISOString(),
      feedback: data.feedback,
    }

    postFeedback(result);

    handleChangePopup();
  };

  function handleClickInner(e) {
    e.stopPropagation();
  }

  return (
    <div className={s.popupInner} onClick={handleClickInner}>
      <div className={s.popupTitle}>
        <h2>Какие впечатления от визита?</h2>
      </div>
      <form className={s.formBlock} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Ваше имя'
          placeholder='Иван Иванов'
          error={errors?.nameOwner?.message}
          {...register('nameOwner', { required: "Обязательное поле"})}
        />
        <Input
          label='Имя питомца'
          placeholder='Дружок'
          error={errors?.namePet?.message}
          {...register('namePet', { required: "Обязательное поле"})}
        />
        <Input
          label='Ваша электронная почта'
          type='email'
          placeholder='example@site.ru'
          error={errors?.email?.message}
          {...register('email', { required: "Обязательное поле"})}
        />
        <Input
          label="Отзыв"
          placeholder="Напишите что-нибудь..."
          className={s.textAreaFeedback}
          error={errors?.feedback?.message}
          {...register('feedback', { required: "Обязательное поле"})}
        />
        <Select
          options={serviceList}
          name='rating'
          control={control}
          placeholder={"5"}
          error={errors?.rating?.message}
          label="Выберите оценку"
        />
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
      <img src="images/popupcat1.png" width="140" height="140" className={s.popupImage} />
    </div>
  )
}