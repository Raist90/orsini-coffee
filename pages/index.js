import About from '../components/About'
import Banner from '../components/Banner'
import Coffee from '../components/Coffee'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileHeader from '../components/MobileHeader'

export default function Home() {
  return (
    <>
      <Header />
      <MobileHeader />
      <Banner />
      <About />
      <Coffee />
      <Cta />
      <Footer />
    </>
  )
}
