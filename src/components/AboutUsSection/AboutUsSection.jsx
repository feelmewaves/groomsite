import s from './AboutUsSection.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './customSwiper.scss'

// import required modules
import { Navigation } from "swiper";

const AboutUsSection = () => {

  return (
    <section className={s.aboutUsSection} id="aboutus">
      <h2>Почему нам доверяют</h2>
      <div className={s.contentWrapper}>
        <div className={s.sliderWrapper}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={s.swiper}
            loop={true}
          >
            <SwiperSlide
              className={s.swiperSlide}
            >
              <div className={s.imgWrapper}>
                <img src={`images/aboutus.jpg`} />
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={s.swiperSlide}
            >
              <div className={s.imgWrapper}>
                <img src={`images/firstsec.jpg`} />
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={s.swiperSlide}
            >
              <div className={s.imgWrapper}>
                <img src={`images/aboutus.jpg`} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={s.info}>
          <h3>Каждый день начинается с улыбки, если в доме есть питомец!</h3>
          <p>Добро пожаловать на сайт груминг-студии "Pet House"!<br />
            Мы можем красиво полстричь вашего питомца, выполнить чистку,<br />а также побаловать SPA-процедурами. В нашей студии работают<br />опытные мастера, которые имеют ветеринарное образование<br />и просто обожают животных.<br /> <br />
            Вы можете быть уверены, что с вашим четвероногим быстро<br />найдут общий язык и предложат максимум полезных и приятных<br />процедур. Работаем только с профессиональной косметикой.</p>
          <div className={s.numberBlock}>
            <div className={s.numbers}>
              <span className={s.boldNumb}>10</span>
              <p>лет<br /> студии</p>
            </div>
            <div className={s.numbers}>
              <span className={s.boldNumb}>12</span>
              <p>грумеров<br />в команде</p>
            </div>
            <div className={s.numbers}>
              <span className={s.boldNumb}>2570</span>
              <p>довольных<br />клиентов</p>
            </div>
            <div className={s.numbers}>
              <span className={s.boldNumb}>3</span>
              <p>студии в<br />Калининграде</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection