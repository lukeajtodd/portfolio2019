import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Globals from '../components/Globals'

import Hero from '../components/Hero'
import About from '../components/About'
import Interests from '../components/Interests'
import Projects from '../components/Projects'

const Container = styled.div`
  ${tw`w-full max-w-content mx-auto`}
`

const IndexPage = () => (
  <>
    <Globals />
    <Container>
      <Hero />
      <About />
      <Interests />
      <Projects />
    </Container>
  </>
)

export default IndexPage
