import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
				<div className={s.leftWrapper}>
					<div className={s.logo}>
					<img src='logo2.png' alt='logo' />
					</div>
					<div className={s.secondPart}>
                    	<h3>Услуги</h3>
						<ul>
							<li>
								<a href='#'>Стрижка</a>
							</li>
							<li>
								<a href='#'>Гигиенические процедуры</a>
							</li>
							<li>
								<a href='#'>SPA-комплексы</a>
							</li>
							<li>
								<a href='#'>Окрашивание</a>
							</li>
						</ul>
					</div>
				
				<div className={s.thirdPart}>
					<h3>О компании</h3>
					<ul>
						<li>
							<a href=''>О нас</a>
						</li>
						<li>
							<a href=''>Наши мастера</a>
						</li>
						<li>
							<a href=''>Отзывы</a>
						</li>
                        <li>
							<a href=''>Контакты</a>
						</li>
					</ul>
				</div>
                <div className={s.fourthPart}>
					<h3>+7 (910) 406-52-87</h3>
					<ul>
						<li>
							<a href=''>Icons 3шт</a>
						</li>
						<li>
							<a href=''>Политика конфиденциальности</a>
						</li>
					</ul>
				</div>
				</div>
			</div>
    )
}
export default Footer