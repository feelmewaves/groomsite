import s from './AdvSection.module.scss'
import EnrollBtn from '@ui/EnrollBtn'

const AdvSection = () => {
	return (
		<section className={s.advSection}>
			<div className={s.contentWrapper}>
				<img src={`images/dogadv.jpg`} />
				<div className={s.wrapper}>
					<h2>Запишитесь к нам!</h2>
					<p>И получите скидку 15% на первое посещение</p>
					<EnrollBtn />
				</div>
			</div>
		</section>
	)
}

export default AdvSection