import type { NextPage } from 'next'
import BackgroundMotion from '../components/BackgroundMotion'
import { HomeContainer } from './styled'

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <BackgroundMotion />
    </HomeContainer>
  )
}

export default Home
