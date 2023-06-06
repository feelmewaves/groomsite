import s from './EnrollBtn.module.scss'
import cn from 'classnames';

const EnrollBtn = ({
	onClick, 
	text = "Записаться",
	outline = false,
	className
}) => {
	const btnClass = cn(s.enrollBtn, {
		[s.outlineBtn]: outline
	}, className)

	return (
		<button className={btnClass} onClick={onClick}>
			<span>{text}</span>
		</button>
	)
}

export default EnrollBtn