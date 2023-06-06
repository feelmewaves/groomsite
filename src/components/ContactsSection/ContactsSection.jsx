import s from './ContactsSection.module.scss'
import { AiFillClockCircle } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { FiMapPin } from "react-icons/fi";


const style = { color: "#fd7553" }
const ContactsSection = () => {
  return (
    <section id="contacts" className={s.contactsSection}>
        <h2>Где мы находимся</h2>
      <div className={s.contentWrapper}>
        <div className={s.wrapper}>
          <div className={s.map}>
            <a
              className={s.mapA1}
              href="https://yandex.ru/maps/org/kolledzh_informatsionnykh_tekhnologiy_i_stroitelstva/1067514565/?utm_medium=mapframe&utm_source=maps"
            >
              Колледж информационных технологий и строительства
            </a>
            <a
              href="https://yandex.ru/maps/22/kaliningrad/category/college/184106236/?utm_medium=mapframe&utm_source=maps"
              className={s.mapA2}
            >
              Колледж в Калининграде
            </a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=20.502138%2C54.748118&mode=search&oid=1067514565&ol=biz&sctx=ZAAAAAgBEAAaKAoSCWVyameYgjRAEYTyPo7mWktAEhIJTl5kAn6N3z8RELHBwkmaxT8iBgABAgMEBSgKOABAuYYGSAFqAnJ1nQHNzEw9oAEAqAEAvQF2kG7OwgEFxfWD%2FQPqAQDyAQD4AQCCAgrQutC40YLQuNGBigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=20.502138%2C54.748118&sspn=0.015840%2C0.005417&text=%D0%BA%D0%B8%D1%82%D0%B8%D1%81&z=16.96"
              width="560"
              height="400"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.info}><FiMapPin style={style}/><p>Калининград, ул. Горького 166</p></div>
          <div className={s.info}><GrMail style={style}/><p>+7 (999) 999-99-99</p></div>
          <div className={s.info}><FiPhone style={style}/><p>pethouse@gm.com</p></div>
          <div className={s.info}><AiFillClockCircle style={style}/><p>Ежедневно с 09:00 до 22:00</p></div>
        </div>
      </div>
    </section>
  )
}

export default ContactsSection
