import { MyHead } from '../../components/MyHead'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ContactMain } from '../../components/ContactMain'
import { ContactContainer } from './style'

export const Contact = () => {
  return (
    <ContactContainer>
      <MyHead />

      <Header />
      <ContactMain />
      <Footer />
    </ContactContainer>
  )
}
