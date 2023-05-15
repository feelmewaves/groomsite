import s from './SecondSection.module.scss'

const SecondSection = () => {
	return (
		<section className={s.secondSection}>
            <h2>Посмотрите, как мы умеем</h2>
			<div className={s.wrapper}>
                <img className={s.img1} src={`images/sec1.png`} />
                <img className={s.img2} src={`images/sec2.png`} />
                <img className={s.img3} src={`images/sec3.png`} />
                <img className={s.img4} src={`images/sec4.png`} />
                <img className={s.img5} src={`images/sec5.png`} />
                <img className={s.img6} src={`images/sec6.png`} />
                <img className={s.img7} src={`images/sec7.png`} />
                <img className={s.img8} src={`images/sec8.png`} />
                <img className={s.img9} src={`images/sec9.png`} />
			</div>
            <h3>Смотрите больше работ в нашем Instagram</h3>
		</section>
	)
}

export default SecondSection