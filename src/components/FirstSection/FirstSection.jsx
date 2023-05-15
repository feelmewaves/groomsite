import s from './FirstSection.module.scss'
import EnrollBtn from '@UI/EnrollBtn'

const FirstSection = () => {
	return (
		<section className={s.firstSection}>
			<div className={s.contentWrapper}>
				<div className={s.wrapper}>
					<p>Груминг в Калининграде</p>
                    <h1>Порадуйте своего питомца</h1>
                    <p>Запишитесь на стрижку и получите скидку 15% на первое знакомство</p>
                    <EnrollBtn />
				</div>
                <img src={`images/firstsec.jpg`} />
			</div>
		</section>
	)
}

export default FirstSection