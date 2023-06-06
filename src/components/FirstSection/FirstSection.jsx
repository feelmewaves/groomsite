import s from './FirstSection.module.scss'
import { Enroll } from '../Enroll';

const FirstSection = () => {
	return (
		<section id="firstsection" className={s.firstSection}>
			<div className={s.contentWrapper}>
				<div className={s.wrapper}>
					<p>Груминг в Калининграде</p>
					<h1>Порадуйте<br /> своего питомца</h1>
					<p>Запишитесь на стрижку и получите<br /> скидку 15% на первое знакомство</p>
					<Enroll />
				</div>
				<img src={`images/firstsec.jpg`} />
			</div>
		</section>
	)
}

export default FirstSection