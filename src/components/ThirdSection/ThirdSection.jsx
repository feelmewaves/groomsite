import { Enroll } from '../Enroll'
import s from './ThirdSection.module.scss'

const ThirdSection = () => {

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
			<Enroll />
		</section>
	)
}

export default ThirdSection