import s from './Main.module.scss'
import HeaderFooterLayout from '@components/HeaderFooterLayout'
import FirstSection from '@components/FirstSection'
import LineBottom from '@components/ui/LineBottom'
import LineTop from '@components/ui/LineTop'
import AboutUsSection from '@components/AboutUsSection'
import AdvSection from '@components/AdvSection'
import SecondSection from '@components/SecondSection'
import ThirdSection from '@components/ThirdSection'
import FeedbackSection from '@components/FeedbackSection'
import ServicesAndPricesSection from '@components/ServicesAndPricesSection'



const Main = () => {
	return (
		<HeaderFooterLayout>
			<main className={s.main}>
				<FirstSection/>
				<LineBottom/>
				<AboutUsSection/>
				<ServicesAndPricesSection/>
				<AdvSection/>
				<SecondSection/>
				<ThirdSection/>
				<FeedbackSection/>
				<LineTop/>
			</main>
		</HeaderFooterLayout>
	)
}

export default Main