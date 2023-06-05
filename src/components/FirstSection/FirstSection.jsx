import { useState } from 'react';
import { AppointmentPopup } from '../AppointmentPopup';
import s from './FirstSection.module.scss'
import EnrollBtn from '@ui/EnrollBtn'
import { Popup } from '../ui/Popup';
import { ThanksPopup } from '../AppointmentPopup';

const FirstSection = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [isPopupForm, setIsPopupForm] = useState(true);

	function togglePopup() {
		setShowPopup(prevState => !prevState);
		setIsPopupForm(true);
	}

	function handleChangePopup() {
		setIsPopupForm(false);
	}

	return (
		<section className={s.firstSection}>
			<div className={s.contentWrapper}>
				<div className={s.wrapper}>
					<p>Груминг в Калининграде</p>
					<h1>Порадуйте<br /> своего питомца</h1>
					<p>Запишитесь на стрижку и получите<br /> скидку 15% на первое знакомство</p>
					<EnrollBtn togglePopup={togglePopup} />
				</div>
				<img src={`images/firstsec.jpg`} />
			</div>
			{
				showPopup && <Popup togglePopup={togglePopup}>
					{isPopupForm ? <AppointmentPopup handleChangePopup={handleChangePopup}/> : <ThanksPopup />}
					
				</Popup>
			}
		</section>
	)
}

export default FirstSection