import s from './FeedbackBtn.module.scss'
import cn from 'classnames';

const FeedbackBtn = ({
	togglePopup, 
	text = "Оставить отзыв",
	outline = false,
	className
}) => {
	const btnClass = cn(s.feedbackBtn, {
		[s.outlineBtn]: outline
	}, className)

	return (
		<button className={btnClass} onClick={togglePopup}>
			<span>{text}</span>
		</button>
	)
}

export default FeedbackBtn