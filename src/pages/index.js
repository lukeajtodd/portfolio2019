import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Globals from '../components/Globals'

import Hero from '../components/Hero'

const Container = styled.div`
  ${tw`w-full max-w-content mx-auto`}
`

const IndexPage = () => (
  <>
    <Globals />
    <Container>
      <Hero />
    </Container>
  </>
)

export default IndexPage
