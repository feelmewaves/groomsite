import { Enroll } from '../Enroll'
import s from './AdvSection.module.scss'

const AdvSection = () => {
	return (
		<section className={s.advSection}>
			<div className={s.contentWrapper}>
				<img src={`images/dogadv.jpg`} />
				<div className={s.wrapper}>
					<h3>Запишитесь к нам!</h3>
					<h4>И получите скидку 15% на первое посещение</h4>
					<Enroll />
				</div>
			</div>
		</section>
	)
}

export default AdvSection