import React from 'react';
import SelectLibrary from 'react-select';
import s from './SelectInput.module.scss';
import { Controller } from 'react-hook-form'

const customStyles = {
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

export function Select({ options, name, control, placeholder, label, error, ...props }) {
  customStyles.control =   (provided, state) => ({
    ...provided,
    border: !error && 'none',
    borderColor: error && '#f05355',
    borderWidth: error ? '2px' : '1px',
    borderRadius: '16px',
    padding: '12px 16px',
    boxShadow: state.isFocused ? '0 0 0 2px #fd7553' : null,
    '&:hover': {
      borderColor: '#fd7553',
    },
  })

  return (
    <div className={s.selectWrapper}>
      <label htmlFor="service">{label}</label>
      <Controller
        control={control}
        name={name}
        rules={{ required: "Обязательное поле"}}
        render={({ field: { onChange, value } }) => (
          <>
            <SelectLibrary
              styles={customStyles}
              options={options}
              id="service"
              value={options.find(o => o.value === value)}
              onChange={onChange}
              label="Услуга"
              placeholder={placeholder}
            />
            {error && <span className={s.errorMessage}>{error}</span>}
          </>
        )}
      />

    </div>
  );
}