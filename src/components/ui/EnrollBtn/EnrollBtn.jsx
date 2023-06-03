import s from './EnrollBtn.module.scss'

const EnrollBtn = ({togglePopup}) => {
	return (
		<button 
			className={s.enrollBtn}
			onClick={togglePopup}	
		>
			<span>Записаться</span>
		</button>
	)
}

export default EnrollBtn