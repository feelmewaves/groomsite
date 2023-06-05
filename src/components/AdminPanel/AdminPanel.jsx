import React, { useEffect, useState } from 'react';
import s from './AdminPanel.module.scss';
import cn from 'classnames';
import { Record } from './Record';
import { Feedback } from './Feedback';

const records = [
  {
    id: 1,
    name: 'Александр',
    number: '89953396802',
    service: 'Стрижка',
    date: '05-06-2023',
    verify: false,
    created_date: '05-05-2023',
  },
  {
    id: 2,
    name: 'Александр',
    number: '89953396802',
    service: 'Стрижка',
    date: '05-06-2023',
    verify: false,
    created_date: '05-05-2023',
  },
  {
    id: 3,
    name: 'Александр',
    number: '89953396802',
    service: 'Стрижка',
    date: '05-06-2023',
    verify: true,
    created_date: '05-05-2023',
  },
  {
    id: 4,
    name: 'Александр',
    number: '89953396802',
    service: 'Стрижка',
    date: '05-06-2023',
    verify: false,
    created_date: '05-05-2023',
  },
]

const recordsFeedback = [
  {
    id: 1,
    ownerName: 'Check',
    petName: 'Test',
    feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur qui, quas praesentium, tempora amet ex quo nemo nisi officia repellendus enim impedit sed reiciendis laboriosam, autem quis repudiandae magnam molestiae incidunt error? Totam consectetur quae quidem fugiat. Praesentium neque voluptas sequi voluptate quas natus minima quasi, doloremque beatae maiores incidunt optio eveniet inventore sint, atque qui libero molestias voluptatem magni explicabo, necessitatibus enim assumenda. Blanditiis maxime iste impedit esse adipisci recusandae saepe similique qui at accusantium repudiandae hic, dolor laborum exercitationem aspernatur. Explicabo tempora beatae voluptas doloribus repellendus illo praesentium, officiis doloremque enim ipsam, dolores quo? Iusto quos architecto illum?',
    rating: '5'
  },
  {
    id: 2,
    ownerName: 'Check',
    petName: 'Test',
    feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur qui, quas praesentium, tempora amet ex quo nemo nisi officia repellendus enim impedit sed reiciendis laboriosam, autem quis repudiandae magnam molestiae incidunt error? Totam consectetur quae quidem fugiat. Praesentium neque voluptas sequi voluptate quas natus minima quasi, doloremque beatae maiores incidunt optio eveniet inventore sint, atque qui libero molestias voluptatem magni explicabo, necessitatibus enim assumenda. Blanditiis maxime iste impedit esse adipisci recusandae saepe similique qui at accusantium repudiandae hic, dolor laborum exercitationem aspernatur. Explicabo tempora beatae voluptas doloribus repellendus illo praesentium, officiis doloremque enim ipsam, dolores quo? Iusto quos architecto illum?',
    rating: '5'
  },
  {
    id: 3,
    ownerName: 'Check',
    petName: 'Test',
    feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur qui, quas praesentium, tempora amet ex quo nemo nisi officia repellendus enim impedit sed reiciendis laboriosam, autem quis repudiandae magnam molestiae incidunt error? Totam consectetur quae quidem fugiat. Praesentium neque voluptas sequi voluptate quas natus minima quasi, doloremque beatae maiores incidunt optio eveniet inventore sint, atque qui libero molestias voluptatem magni explicabo, necessitatibus enim assumenda. Blanditiis maxime iste impedit esse adipisci recusandae saepe similique qui at accusantium repudiandae hic, dolor laborum exercitationem aspernatur. Explicabo tempora beatae voluptas doloribus repellendus illo praesentium, officiis doloremque enim ipsam, dolores quo? Iusto quos architecto illum?',
    rating: '5'
  },
  {
    id: 4,
    ownerName: 'Check',
    petName: 'Test',
    feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur qui, quas praesentium, tempora amet ex quo nemo nisi officia repellendus enim impedit sed reiciendis laboriosam, autem quis repudiandae magnam molestiae incidunt error? Totam consectetur quae quidem fugiat. Praesentium neque voluptas sequi voluptate quas natus minima quasi, doloremque beatae maiores incidunt optio eveniet inventore sint, atque qui libero molestias voluptatem magni explicabo, necessitatibus enim assumenda. Blanditiis maxime iste impedit esse adipisci recusandae saepe similique qui at accusantium repudiandae hic, dolor laborum exercitationem aspernatur. Explicabo tempora beatae voluptas doloribus repellendus illo praesentium, officiis doloremque enim ipsam, dolores quo? Iusto quos architecto illum?',
    rating: '5'
  }
];

export function AdminPanel() {
  const [tabIndex, setTabIndex] = useState(0);
  const [rerender, setRerender] = useState(false);

  function handleChangeTab(index) {
    setTabIndex(index);
  }

  function onChangeVerify(id) {
    const data = tabIndex === 0 ? recordsFeedback : records;

    const findObject = data.find(item => item.id === id);
    findObject.verify = !findObject.verify;
    setRerender(prevState => !prevState);
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