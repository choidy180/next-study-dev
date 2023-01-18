import type { NextPage } from 'next'
import styled from 'styled-components'
import ThemeHeader from '../components/index/themeHeader'

const Home: NextPage = () => {
  return (
    <Container>
      <p>123</p>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  transition: all .2s ease-in-out;
  p {
    color: var(--tx-main);
  }
`
export default Home
