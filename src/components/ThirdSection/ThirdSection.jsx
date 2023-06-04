import s from './ThirdSection.module.scss'
import { useEffect, useState } from 'react'
import EnrollBtn from '@ui/EnrollBtn'

const ThirdSection = () => {

	// const [currentIndex, setCurrentIndex] = useState(0)
	// const [isTimerActive, setIsTimerActive] = useState(true)

	// useEffect(() => {
	// 	const timerId = setTimeout(() => {
	// 		isTimerActive && nextSlide()
	// 	}, 7000)

	// 	return () => clearTimeout(timerId)
	// }, [currentIndex, isTimerActive])

	// const prevSlide = () => {
	// 	setCurrentIndex(
	// 		currentIndex <= 0
	// 			? currentIndex + (eventsSectionData.length - 1)
	// 			: currentIndex - 1
	// 	)
	// }
	// const nextSlide = () => {
	// 	setCurrentIndex(
	// 		currentIndex === eventsSectionData.length - 1
	// 			? currentIndex - (eventsSectionData.length - 1)
	// 			: currentIndex + 1
	// 	)
	// }
	// const setSlide = (index) => {
	// 	setCurrentIndex(index)
	// }

	return (
		<section className={s.thirdSection}>
			<h2>Хотите так же? Приходите к нам!</h2>
			<div className={s.contentWrapper}>
				<div className={s.wrapper}>
					<img src={`images/dogbefore.jpg`} />
					<h3>До преображения</h3>
				</div>
				<div className={s.wrapper}>
					<img src={`images/dogafter.jpg`} />
					<h3>После преображения</h3>
				</div>
			</div>
			<EnrollBtn />
		</section>
	)
}

export default ThirdSection