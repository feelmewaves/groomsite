import { useState } from 'react';
import { FeedbackPopup, ThanksPopup } from '../FeedbackPopup';
import { Popup } from '../ui/Popup';
import s from './FeedbackSection.module.scss'
import EnrollBtn from '../ui/EnrollBtn/EnrollBtn';
import { AiOutlineHeart } from "react-icons/ai";

const FeedbackSection = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [isPopupForm, setIsPopupForm] = useState(true);

	function togglePopup() {
		setShowPopup(prevState => !prevState);
		setIsPopupForm(true);
	}

	function handleChangePopup() {
		setIsPopupForm(false);
	}

	const style = { color: "#fd7553" }

	return (
		<section id="feedback" className={s.feedbackSection}>
			<h2>Отзывы</h2>
			<div className={s.contentWrapper}>
				<div className={s.wrapper}>
					<h3>Ирина Ченцова и Шелдон</h3>
					<div className={s.rating}>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					</div>
					<p>Очень понравилась стрижка пушистого кота "под льва". Всё подровняли, оформили, в конце стрижки обработали шерсть. И цена приятно радует. Придём ещё:)</p>
				</div>
				<div className={s.wrapper}>
					<h3>Дарья Иванова и Рыжа</h3>
					<div className={s.rating}>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					</div>
					<p>Год назад посетили Pet House и теперь ходим только туда! Мастера вежливы, свою работу выполняют качественно. С Рыжуней очень быстро нашли общий язык. Мы всегда довольны результатом!))</p>
				</div>
				<div className={s.wrapper}>
					<h3>Денис Петров и Чак</h3>
					<div className={s.rating}>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					<AiOutlineHeart style={style}/>
					</div>
					<p>Приехали первый раз в салон, посмотреть как стригут собачек, и удивились, когда Чак вышел из грумерской, посмотрел на меня и вернулся обратно. Обычно он пугливый! Супер стрижка, вежливое обслуживание. Огромнейшее спасибо салону!</p>
				</div>
			</div>
			<EnrollBtn 
				outline={true}
				text="Оставить отзыв"
				onClick={togglePopup}
			/>
			{
				showPopup && <Popup togglePopup={togglePopup}>
					{isPopupForm ? <FeedbackPopup handleChangePopup={handleChangePopup} /> : <ThanksPopup />}
				</Popup>
			}
		</section>
	)
}

export default FeedbackSection