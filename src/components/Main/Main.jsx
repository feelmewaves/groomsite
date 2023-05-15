import s from './Main.module.scss'
import HeaderFooterLayout from '@components/HeaderFooterLayout'
import FirstSection from '@components/FirstSection'
import LineBottom from '@components/ui/LineBottom'
import AboutUsSection from '@components/AboutUsSection'
import AdvSection from '@components/AdvSection'
import SecondSection from '@components/SecondSection'
import ThirdSection from '@components/ThirdSection'


const Main = () => {
	return (
		<HeaderFooterLayout>
			<main className={s.main}>
				<FirstSection/>
				<LineBottom/>
				<AboutUsSection/>
				<AdvSection/>
				<SecondSection/>
				<ThirdSection/>
			</main>
		</HeaderFooterLayout>
	)
}

export default Main