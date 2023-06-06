import React, { forwardRef } from 'react';
import s from './Input.module.scss';
import cn from 'classnames';

export const Input = forwardRef(({
  className,
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  ...props
}, ref) => {

  const inputClass = cn(s.input, {
    [s.inputError]: error
  })

  return (
    <div className={className}>
      {label &&  (
        <div className={s.label}>
          <label htmlFor={name}>{label}</label>
        </div>
      )}
      <input
        className={inputClass}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        ref={ref}
        {...props}
      />
      {error && <span className={s.errorMessage}>{error}</span>}
    </div>
  )
})

