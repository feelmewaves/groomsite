import s from './FeedbackSection.module.scss'
import FeedbackBtn from '@ui/FeedbackBtn'

const FeedbackSection = () => {

	return (
		<section className={s.feedbackSection}>
			<h2>Отзывы</h2>
			<div className={s.contentWrapper}>
				<div className={s.wrapper}>
					<h3>Ирина Ченцова и Шелдон</h3>
                    <p>Очень понравилась стрижка пушистого кота "под льва". Всё подровняли, оформили, в конце стрижки обработали шерсть. И цена приятно радует. Придём ещё:)</p>
				</div>
				<div className={s.wrapper}>
					<h3>Дарья Иванова и Рыжа</h3>
					<p>Год назад посетили Pet House и теперь ходим только туда! Мастера вежливы, свою работу выполняют качественно. С Рыжуней очень быстро нашли общий язык. Мы всегда довольны результатом!))</p>
				</div>
				<div className={s.wrapper}>
					<h3>Денис Петров и Чак</h3>
					<p>Приехали первый раз в салон, посмотреть как стригут собачек, и удивились, когда Чак вышел из грумерской, посмотрел на меня и вернулся обратно. Обычно он пугливый! Супер стрижка, вежливое обслуживание. Огромнейшее спасибо салону!</p>
				</div>
			</div>
			<FeedbackBtn/>
		</section>
	)
}

export default FeedbackSection