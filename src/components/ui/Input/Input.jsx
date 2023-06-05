import React, { forwardRef } from 'react';
import s from './Input.module.scss';

export const Input = forwardRef(({
  className,
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  meta,
  ...props
}, ref) => {
  return (
    <div className={className}>
      {label ? (
        <div className={s.label}>
          <label htmlFor={name}>{label}</label>
          {meta && meta.touched && meta.error && (
            <span>
              {meta.error}
            </span>
          )}
        </div>
      ) : (
        meta && meta.touched && meta.error && <span>{meta.error}</span>
      )}
      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        ref={ref}
        {...props}
      />
    </div>
  )
})

