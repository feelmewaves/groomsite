import s from './ServicesCard.module.scss'

const ServicesCard = () => {
	return (
        <div>
			<div className={s.wrapper}>
                <img></img>
                <h3>Стрижка</h3>
                <p>Профессиональная стрижка для кошек и собак любой породы</p>
			</div>

            <div className={s.wrapper}>
                <img></img>
                <h3>Гигиенические процедуры</h3>
                <p>Чистка ушей, глаз, зубов, стрижка когтей, экспресс-линька и многое другое</p>
			</div>

            <div className={s.wrapper}>
                <img></img>
                <h3>SPA-комплексы</h3>
                <p>Премиальные маски для защиты и глубокого питания кожи и шерсти</p>
			</div>

            <div className={s.wrapper}>
                <img></img>
                <h3>Окрашивание</h3>
                <p>Окрашивание шерсти в различные цвета специальной краской, окрашивание узором</p>
			</div>
        </div>
	)
}

export default ServicesCard