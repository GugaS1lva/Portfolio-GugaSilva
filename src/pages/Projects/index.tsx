import { MyHead } from '../../components/MyHead'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ProjectsMain } from '../../components/ProjectsMain'
import { ProjectsContainer } from './style'

export const Projects = () => {
  return (
    <ProjectsContainer>
      <MyHead />

      <Header />
      <ProjectsMain />
      <Footer />
    </ProjectsContainer>
  )
}
