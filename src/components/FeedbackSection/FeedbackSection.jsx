import React, { useEffect, useState } from 'react';
import { FeedbackPopup, ThanksPopup } from '../FeedbackPopup';
import { Popup } from '../ui/Popup';
import s from './FeedbackSection.module.scss'
import EnrollBtn from '../ui/EnrollBtn/EnrollBtn';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { getFeedbacks } from '@/api';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const FeedbackSection = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [isPopupForm, setIsPopupForm] = useState(true);
	const [feedbacks, setFeedbacks] = useState([]);

	useEffect(() => {
		getFeedbacks().then(data => setFeedbacks(data));
	}, [])

	function togglePopup() {
		setShowPopup(prevState => !prevState);
		setIsPopupForm(true);
	}

	function handleChangePopup() {
		setIsPopupForm(false);
	}

	function renderHearths(value) {
		const style = { color: "#fd7553" }
		const heartsArray = [];
		for (let i = 0; i < 5; i++) {
			if (i <= value - 1) heartsArray.push(<AiFillHeart style={style} key={i} />)
			else heartsArray.push(<AiOutlineHeart style={style} key={i} />)
		}

		return heartsArray;
	}

	return (
		feedbacks.length &&
		<section id="feedback" className={s.feedbackSection}>
			<h2>Отзывы</h2>
			<div className={s.contentWrapper}>
				<Swiper
					navigation={true}
					modules={[Navigation]}
					className={s.swiper}
					spaceBetween={50}
					slidesPerView={3}
				>
					{
						feedbacks.map((feedback) => (
							<React.Fragment key={feedback.id}>
								<SwiperSlide className={s.swiperSlide}>
									<div className={s.wrapper}>
										<h3>{feedback.ownerName} и {feedback.petName}</h3>
										<div className={s.rating}>
											{renderHearths(feedback.rating)}
										</div>
										<p>{feedback.feedback}</p>
									</div>
								</SwiperSlide>
							</React.Fragment>
						))
					}
				</Swiper>
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