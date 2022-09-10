import { MyHead } from '../../components/MyHead'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HomeMain } from '../../components/HomeMain'
import { HomeContainer } from './style'

export default function Home() {
  return (
    <HomeContainer>
      <MyHead />

      {/* <Header /> */}
      <HomeMain />
      {/* <Footer /> */}
    </HomeContainer>
  )
}
