import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import TrianglePattern from '../components/TrianglePattern'

const Section = styled.section`
  ${tw`flex relative h-full xl:h-screen xl:items-center xl:justify-center flex-col px-8`}
  @media screen and (min-width: 1200px) {
    border-right: 40px solid #31f0c4;
  }
`

const Content = styled.p`
  ${tw`font-sans text-primary text-center text-xl xl:text-2xl leading-normal mb-0`}
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`

const ListContainer = styled.div`
  ${tw`w-full flex relative justify-center`}
`

const InterestList = styled.ul`
  ${tw`text-primary font-display list-reset text-interest-sm xl:text-interest-lg text-right mt-spacer-2 mr-4`}
`

const InterestListMirrored = styled.ul`
  ${tw`opacity-25 text-primary font-display list-reset text-interest-sm xl:text-interest-lg text-left mt-spacer-2`}
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`

const Interests = () => (
  <Section>
    <TrianglePattern left={0} top="100%" />
    <Content>
      Here are a couple of the things I’m interested in, actively learning or
      working on:
    </Content>
    <ListContainer>
      <InterestList>
        <li>Typescript</li>
        <li>hDOM</li>
        <li>TDD</li>
        <li>Rust</li>
      </InterestList>
      <InterestListMirrored>
        <li>Typescript</li>
        <li>hDOM</li>
        <li>TDD</li>
        <li>Rust</li>
      </InterestListMirrored>
    </ListContainer>
  </Section>
)

export default Interests
