import { Enroll } from '../Enroll'
import s from './ServicesAndPricesSection.module.scss'

const ServicesAndPricesSection = () => {
  return (
    <section id="services" className={s.servicesAndPricesSection}>
      <div className={s.contentWrapper}>
        <h2>Услуги и цены</h2>
        <div className={s.blocks}>
          <div className={s.wrapper}>
            <img src="images/serv1.PNG"></img>
            <h3>Стрижка</h3>
            <p>
              Профессиональная
              <br />
              стрижка для кошек
              <br />и собак любой породы
            </p>
          </div>

          <div className={s.wrapper}>
            <img src="images/serv2.PNG"></img>
            <h3>Гигиенические процедуры</h3>
            <p>
              Чистка ушей, глаз,
              <br />
              зубов, стрижка когтей,
              <br />
              экспресс-линька
              <br />и многое другое
            </p>
          </div>

          <div className={s.wrapper}>
            <img src="images/serv3.PNG"></img>
            <h3>SPA-комплексы</h3>
            <p>
              Премиальные маски
              <br />
              для защиты и глубокого
              <br />
              питания кожи и шерсти
            </p>
          </div>

          <div className={s.wrapper}>
            <img src="images/serv4.PNG"></img>
            <h3>Окрашивание</h3>
            <p>
              Окрашивание шерсти
              <br />в различные цвета
              <br />
              специальной краской,
              <br />
              окрашивание узором
            </p>
          </div>
        </div>
        <div className={s.changeInfo}>
          <div className={s.info}>
            <h3>Стрижка</h3>
            <p>
              Профессиональная стрижка избавит от линьки, колтунов
              <br />и загрязнений, а так же сделает питомца более
              привлекательным.
              <br />У нас стригут длинношерстных и короткошёрстных четвероногих.
              <br />
              Мастера могут не тольно подровнять, но и сделать креативные
              <br />
              модельные стрижки различной сложности.
              <br />
              <br />
              Длительность процедуры: для кошек - от 40 до 80 минут,
              <br />
              для собак - от 50 до 100 минут.
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
                <tr>
                  <td>Гигиеническая стрижка</td>
                  <td className={s.elem} >от 2300 р</td>
                  <td className={s.elem} >от 2000 р</td>
                </tr>
                <tr>
                  <td>Креативный груминг</td>
                  <td className={s.elem} >от 2000 р</td>
                  <td className={s.elem} >от 2500 р</td>
                </tr>
                <tr>
                  <td>Модельная стрижка головы</td>
                  <td className={s.elem} >от 500 р</td>
                  <td className={s.elem} >от 650 р</td>
                </tr>
                <tr>
                  <td>Стрижка "Лев"</td>
                  <td className={s.elem} >от 3500 р</td>
                  <td className={s.elem} >-</td>
                </tr>
                <tr>
                  <td>Пуделиные лапки</td>
                  <td className={s.elem} >-</td>
                  <td className={s.elem} >от 200 р</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesAndPricesSection
