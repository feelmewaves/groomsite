import React from 'react';
import SelectLibrary from 'react-select';
import s from './SelectInput.module.scss';
import { Controller } from 'react-hook-form'

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    borderRadius: '16px',
    padding: '12px 16px',
    boxShadow: state.isFocused ? '0 0 0 2px #fd7553' : null,
    '&:hover': {
      borderColor: '#fd7553',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#fd7553' : null,
    color: state.isSelected ? '#fff' : null,
    '&:hover': {
      backgroundColor: '#fd7553',
      color: '#fff',
    },
  }),
};

export function Select({ options, name, control, ...props }) {
  return (
    <div className={s.selectWrapper}>
      <label htmlFor="service">Услуги</label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <SelectLibrary
            styles={customStyles}
            options={options}
            id="service"
            value={options.find(o => o.value === value)}
            onChange={onChange}
            label="Услуга"
            placeholder="Выберите услугу"
          />
        )}
      />

    </div>
  );
}