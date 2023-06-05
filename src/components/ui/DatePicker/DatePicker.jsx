import { useState } from 'react';
import DatePickerLibrary from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import './DatePicker.scss';
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from 'react-hook-form';

export function DatePicker ({control, name}) {
  return (
    <div className="datePickerWrapper">
      <label>Дата</label>
      <Controller 
        name={name}
        control={control}
        defaultValue={new Date()}
        render={({field: {onChange, value}}) => (
          <DatePickerLibrary 
            selected={value}
            onChange={onChange}
            className="datePicker"
            locale={ru}
            dateFormat='dd-MM-yyyy'
          />
        )}
      />
    </div>
  )
}