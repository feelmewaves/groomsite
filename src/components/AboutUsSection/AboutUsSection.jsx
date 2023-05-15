import s from './AboutUsSection.module.scss'

const AboutUsSection = () => {

	return (
		<section className={s.aboutUsSection}>
				<h2>Почему нам доверяют</h2>
				<div className={s.contentWrapper}>
					<div className={s.slider}>
                    <img src={`images/aboutus.jpg`} />
                    </div>
                    <div className={s.wrapper}>
                        <h3>Каждый день начинается с улыбки, если в доме есть питомец!</h3>
                        <p>Добро пожаловать на сайт груминг-студии "Pet House"!<br />
                        Мы можем красиво полстричь вашего питомца, выполнить чистку, а также побаловать SPA-процедурами. В нашей студии работают опытные мастера, которые имеют ветеринарное образование и просто обожают животных.<br /> <br/>
                        Вы можете быть уверены, что с вашим четвероногим быстро найдут общий язык и предложат максимум полезных и приятных процедур. Работаем только с профессиональной косметикой.</p>
                        <div className={s.numberBlock}>
                            <div className={s.numbers}>
                                <span className={s.boldNumb}>10</span>
                                <span>лет</span><span>студии</span>
                            </div>
                            <div className={s.numbers}>
                                <span className={s.boldNumb}>12</span>
                                <span>грумеров</span><span>в команде</span>
                            </div>
                            <div className={s.numbers}>
                                <span className={s.boldNumb}>2570</span>
                                <span>довольных</span><span>клиентов</span>
                            </div>
                            <div className={s.numbers}>
                                <span className={s.boldNumb}>3</span>
                                <span>студии в</span><span>Калининграде</span>
                            </div>
                        </div>
                    </div>
				</div>
		</section>
	)
}

export default AboutUsSection