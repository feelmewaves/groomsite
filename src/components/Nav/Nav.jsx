import s from './Nav.module.scss'

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li>
					<a href='#'>О нас</a>
				</li>
				<li>
					<a href='#'>Услуги</a>
				</li>
				<li>
					<a href='#'>Наши работы</a>
				</li>
                <li>
					<a href='#'>Отзывы</a>
				</li>
                <li>
					<a href='#'>Контакты</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav