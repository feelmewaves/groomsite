import s from './ThirdSection.module.scss'
import { useEffect, useState } from 'react'
import EnrollBtn from '@ui/EnrollBtn'

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
			<EnrollBtn />
		</section>
	)
}

export default ThirdSection