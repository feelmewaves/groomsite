import s from './Nav.module.scss'
import { HashLink } from 'react-router-hash-link'

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li>
					<HashLink to='/#aboutus'>О нас</HashLink>
				</li>
				<li>
					<HashLink to='/#services'>Услуги</HashLink>
				</li>
				<li>
					<HashLink to='/#ourworks'>Наши работы</HashLink>
				</li>
                <li>
					<HashLink to='/#feedback'>Отзывы</HashLink>
				</li>
                <li>
					<HashLink to='/#contacts'>Контакты</HashLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav