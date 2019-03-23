import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Globals from '../components/Globals'

import Hero from '../components/Hero'

const Container = styled.div`
  ${tw`container`}
`

const IndexPage = () => (
  <>
    <Globals />
    <Container />
    <div className="w-full">
      <Hero />
    </div>
  </>
)

export default IndexPage
