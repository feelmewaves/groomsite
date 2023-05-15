import Header from '@components/Header'
import Footer from '@components/Footer'

const HeaderFooterLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default HeaderFooterLayout