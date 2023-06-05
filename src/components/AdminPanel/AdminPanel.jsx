import React, { useEffect, useState } from 'react';
import s from './AdminPanel.module.scss';
import cn from 'classnames';
import { Record } from './Record';
import { Feedback } from './Feedback';
import { getFeedbacks, getRecords, updateRecords } from '@/api';

export function AdminPanel() {
  const [tabIndex, setTabIndex] = useState(0);
  const [records, setRecords] = useState([]);
  const [recordsFeedback, setRecordsFeedback] = useState([]);

  useEffect(() => {
    if (tabIndex === 0) {
      getFeedbacks().then(data => setRecordsFeedback(data));
    } else {
      getRecords().then(data => setRecords(data));
    }
  }, [tabIndex])

  function handleChangeTab(index) {
    setTabIndex(index);
  }

  function onChangeVerify(id) {
    setRecords(prevState => ([
      ...prevState.map(item => {
        if (item.id === id ) {
          return {
            ...item,
            verify: !item.verify,
          }
        }
        return item
      })
    ]))

    updateRecords(id, {
      verify: !records.find(item => item.id === id).verify
    })
  }

  return (
    <div className={s.panelWrapper}>
      <div className={s.tabsContainer}>
        <div 
          className={cn(s.tab, { [s.tabActive]: tabIndex === 0 })} 
          onClick={() => handleChangeTab(0)}
        >
          Отзывы
        </div>
        <div 
          className={cn(s.tab, { [s.tabActive]: tabIndex === 1 })} 
          onClick={() => handleChangeTab(1)}
        >
          Заявки
        </div>
      </div>
      <div className={s.infoContainer}>
        <div className={s.infoContainerTitle}>
          <p>{tabIndex === 0 ? 'Отзывы' : 'Заявки'}</p>
        </div>
        <div className={s.recordsBlock}>
          {
            tabIndex !== 0 ? 
            records.map((record) => (
              <Record
                key={record.id}
                record={record}
                onChangeVerify={onChangeVerify}
              />
            )) : recordsFeedback.map(feedback => (
              <Feedback 
                key={feedback.id}
                feedback={feedback}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}