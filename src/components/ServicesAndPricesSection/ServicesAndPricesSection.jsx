import { useState } from 'react'
import { Enroll } from '../Enroll'
import s from './ServicesAndPricesSection.module.scss'
import cn from 'classnames';

const sectionInfo = [
  {
    title: 'Стрижка',
    text: 'Профессиональная стрижка для кошек и собак любой породы',
    src: "images/serv1.PNG",
    textContent: `Профессиональная стрижка избавит от линьки, колтунов
    и загрязнений, а так же сделает питомца более привлекательным.
    У нас стригут длинношерстных и короткошёрстных четвероногих.
    Мастера могут не тольно подровнять, но и сделать креативные
    модельные стрижки различной сложности.
    Длительность процедуры: для кошек - от 40 до 80 минут,
    для собак - от 50 до 100 минут.  
    `,
    servicePrice: [
      {
        name: 'Гигиеническая стрижка',
        cat: '2300',
        dog: '2000',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '2000',
        dog: '2500',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '500',
        dog: '650',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '3500',
        dog: '',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '',
        dog: '200',
      },
    ]
  },
  {
    title: 'Гигиенические процедуры',
    text: `Чистка ушей, глаз, зубов, стрижка когтей, экспресс-линька и многое другое`,
    src: "images/serv2.PNG",
    textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, perferendis officia. Quam voluptas molestiae cupiditate, corrupti quo culpa nisi nostrum est! Iure nam veniam eum ipsum vel voluptates cupiditate alias?`,
    servicePrice: [
      {
        name: 'Гигиеническая стрижка',
        cat: '2300',
        dog: '2000',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '2000',
        dog: '2500',
      },
    ]
  },
  {
    title: 'SPA-комплексы',
    text: `Премиальные маски для защиты и глубокого питания кожи и шерсти`,
    src: "images/serv3.PNG",
    textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, perferendis officia. Quam voluptas molestiae cupiditate, corrupti quo culpa nisi nostrum est! Iure nam veniam eum ipsum vel voluptates cupiditate alias?`,
    servicePrice: [
      {
        name: 'Гигиеническая стрижка',
        cat: '2300',
        dog: '2000',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '2000',
        dog: '2500',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '500',
        dog: '650',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '3500',
        dog: '',
      },
    ]
    
  },
  {
    title: 'Окрашивание',
    text: `Окрашивание шерсти в различные цвета специальной краской,окрашивание узором`,
    src: "images/serv4.PNG",
    textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, perferendis officia. Quam voluptas molestiae cupiditate, corrupti quo culpa nisi nostrum est! Iure nam veniam eum ipsum vel voluptates cupiditate alias?`,
    servicePrice: [
      {
        name: 'Гигиеническая стрижка',
        cat: '2300',
        dog: '2000',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '2000',
        dog: '2500',
      },
      {
        name: 'Гигиеническая стрижка',
        cat: '500',
        dog: '650',
      },
    ]
    
  }
]

const ServicesAndPricesSection = () => {
  const [selectedSection, setSelectedSection] = useState('Стрижка');

  function handleClickSection(value) {
    setSelectedSection(value);
  }

  return (
    <section id="services" className={s.servicesAndPricesSection}>
      <div className={s.contentWrapper}>
        <h2>Услуги и цены</h2>
        <div className={s.blocks}>
          {sectionInfo.map(section => (
            <div
              className={cn(s.wrapper, {
                [s.activeWrapper]: section.title === selectedSection
              })}
              onClick={() => handleClickSection(section.title)}
            >
              <img src={section.src} />
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </div>
          ))}
        </div>
        {sectionInfo.map(section => 
          section.title === selectedSection ?
          <div className={s.changeInfo}>
            <div className={s.info}>
              <h3>{section.title}</h3>
              <p>
                {section.textContent}
              </p>
              <Enroll />
            </div>
            <div className={s.table}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Услуги</th>
                    <th className={s.elem} scope="col">Кошки</th>
                    <th className={s.elem} scope="col">Собаки</th>
                  </tr>
                </thead>
                <tbody>
                  { section?.servicePrice &&
                    section.servicePrice.map(service => (
                      <tr>
                        <td>{service.name}</td>
                        <td className={s.elem}>{service.cat ? `от ${service.cat} р` : '-'}</td>
                        <td className={s.elem}>{service.dog ? `от ${service.dog} р` : '-'}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div> : null
        )}
      </div>
    </section >
  )
}

export default ServicesAndPricesSection
