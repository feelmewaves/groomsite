import s from './Nav.module.scss'

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li>
					<a href='#aboutus'>О нас</a>
				</li>
				<li>
					<a href='#services'>Услуги</a>
				</li>
				<li>
					<a href='#ourworks'>Наши работы</a>
				</li>
                <li>
					<a href='#feedback'>Отзывы</a>
				</li>
                <li>
					<a href='#contacts'>Контакты</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav