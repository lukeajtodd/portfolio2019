import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Globals from '../components/Globals'
import Image from '../components/image'

const Container = styled.div`
  ${tw`container`}
`

const IndexPage = () => (
  <>
    <Globals />
    <Container />
    <div className="container mx-auto">
      <h1>Luke Todd</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
  </>
)

export default IndexPage
