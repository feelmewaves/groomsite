import s from './Input.module.scss';

export function Input({
  className,
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  meta,
  ...props
}) {
  return (
    <div>
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
        {...props}
      />
    </div>
  );
}
