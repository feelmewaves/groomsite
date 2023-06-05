import s from './Checkbox.module.scss';

export function Checkbox({id, name, checked, onChange}) {
  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      required
      className={s.customCheckbox}
      checked={checked}
      onChange={onChange}
    />
  )
}