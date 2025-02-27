import { Hero, MainContent1, MainContent2, TextBlock } from './sections/index'
import { FooterForm, Footer } from './components/index'

const Home = () => {
  return (
    <>
      <Hero />
      <MainContent1 />
      <TextBlock />
      <MainContent2 />
      <FooterForm />
      <Footer />
    </>
  )
}
export default Home;