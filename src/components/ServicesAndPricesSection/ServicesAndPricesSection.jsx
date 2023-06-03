import EnrollBtn from '../ui/EnrollBtn/EnrollBtn'
import s from './ServicesAndPricesSection.module.scss'

const ServicesAndPricesSection = () => {
	return (
		<section className={s.servicesAndPricesSection}>
			<div className={s.contentWrapper}>
                <h2>Услуги и цены</h2>
                <div className={s.blocks}>
                    <div className={s.wrapper}>
                        <img src='images/serv1.PNG'></img>
                        <h3>Стрижка</h3>
                        <p>Профессиональная стрижка для кошек и собак любой породы</p>
                    </div>

                    <div className={s.wrapper}>
                        <img src='images/serv2.PNG'></img>
                        <h3>Гигиенические процедуры</h3>
                        <p>Чистка ушей, глаз, зубов, стрижка когтей, экспресс-линька и многое другое</p>
                    </div>

                    <div className={s.wrapper}>
                        <img src='images/serv3.PNG'></img>
                        <h3>SPA-комплексы</h3>
                        <p>Премиальные маски для защиты и глубокого питания кожи и шерсти</p>
                    </div>

                    <div className={s.wrapper}>
                        <img src='images/serv4.PNG'></img>
                        <h3>Окрашивание</h3>
                        <p>Окрашивание шерсти в различные цвета специальной краской, окрашивание узором</p>
                    </div>
                </div>
                <div className={s.changeInfo}>
                    <div className={s.info}> 
                        <h3>Стрижка</h3>
                        <p>Профессиональная стрижка избавит от линьки, колтунов и загрязнений, а так же сделает питомца более привлекательным. У нас стригут длинношерстных и короткошёрстных четвероногих. Мастера могут не тольно подровнять, но и сделать креативные модельные стрижки различной сложности.</p>
                        <p>Длительность процедуры: для кошек - от 40 до 80 минут, для собак - от 50 до 100 минут.</p>
                        <EnrollBtn/>
                    </div>
                    
                        <table className={s.table}>
                            <tr><th>Услуги</th><th>Кошки</th><th>Собаки</th></tr>
                            <tr><td>Гигиеническая стрижка</td><td>от 2300 р</td><td>от 2000 р</td></tr>
                            <tr><td>Креативный груминг</td><td>от 2000 р</td><td>от 2500 р</td></tr>
                            <tr><td>Модельная стрижка головы</td><td>от 500 р</td><td>от 650 р</td></tr>
                            <tr><td>Стрижка "Лев"</td><td>от 3500 р</td><td>-</td></tr>
                            <tr><td>Пуделиные лапки</td><td>-</td><td>от 200 р</td></tr>

                        </table>
                    </div>
				
			    </div>
		</section>
	)
}

export default ServicesAndPricesSection