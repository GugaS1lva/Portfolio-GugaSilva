import { MyHead } from '../../components/MyHead'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CurriculumMain } from '../../components/CurriculumMain'
import { CurriculumContainer } from './style'

export const Curriculum = () => {
  return (
    <CurriculumContainer>
      <MyHead />
      
      <Header />
      <CurriculumMain />
      <Footer />
    </CurriculumContainer>
  )
}
