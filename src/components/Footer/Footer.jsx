import s from './Footer.module.scss'
import { FaTelegramPlane } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaViber } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={s.footer}>
				<div className={s.contentWrapper}>
					<div className={s.logo}>
					<img src='logo2.png' alt='logo' />
					</div>
					<div className={s.wrapper}>
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
				
				<div className={s.wrapper}>
					<h3>О компании</h3>
					<ul>
						<li>
							<a href="#aboutus">О нас</a>
						</li>
						<li>
							<a href="#feedback">Отзывы</a>
						</li>
                        <li>
							<a href="#contacts">Контакты</a>
						</li>
					</ul>
				</div>
                <div className={s.wrapper}>
					<h3>+7 (910) 406-52-87</h3>
					<ul>
						<li className={s.icons}>
							<a href='#'><SlSocialVkontakte /></a>
							<a href='#'><FaTelegramPlane /></a>
							<a href='#'><FaViber /></a>
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